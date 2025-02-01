import { Express } from "express";
import fs from "node:fs/promises";
import { ViteDevServer } from "vite";

import { getEnv } from "@/server/utils/getEnv";

const environment = getEnv();

const isProduction = environment === "production";
const base = process.env.BASE || "/";

let vite: ViteDevServer | undefined;
let templateHtml: string | undefined;
let ssrManifest: string | undefined;

export const initReactEntry = async (app: Express) => {
  // Cached production assets
  templateHtml = isProduction
    ? await fs.readFile("./dist/client/index.html", "utf-8")
    : "";
  ssrManifest = isProduction
    ? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8")
    : undefined;

  if (!isProduction) {
    const { createServer } = await import("vite");
    vite = await createServer({
      server: { middlewareMode: true },
      appType: "custom",
      base,
    });
    app.use(vite.middlewares);
  } else {
    const compression = (await import("compression")).default;
    const sirv = (await import("sirv")).default;
    app.use(compression());
    app.use(base, sirv("./dist/client", { extensions: [] }));
  }

  // Serve HTML
  app.use("*all", async (req, res) => {
    try {
      const url = req.originalUrl.replace(base, "");

      let template;
      let render;
      if (!isProduction && vite) {
        // Always read fresh template in development
        template = await fs.readFile("./index.html", "utf-8");
        template = await vite.transformIndexHtml(url, template);
        render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
      } else {
        template = templateHtml;
        render = (await import("./dist/server/entry-server.js"!)).render;
      }

      const rendered = await render(url, ssrManifest);

      const html = template!
        .replace(`<!--app-head-->`, rendered.head ?? "")
        .replace(`<!--app-html-->`, rendered.html ?? "");

      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (e) {
      // TODO: remove the `as Error` cast
      const error = e as Error;
      vite?.ssrFixStacktrace(error);
      console.log(error.stack);
      res.status(500).end(error.stack);
    }
  });
};
