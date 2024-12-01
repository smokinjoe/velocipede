import fs from "node:fs/promises";
import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

const getEnv = () => {
  const env = process.env.NODE_ENV;

  if (env === undefined) {
    return "local";
  }

  return env;
};

// Constants
const environment = getEnv();

dotenv.config({ path: `.env.${environment}` });

const isProduction = environment === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";
const ssrManifest = isProduction
  ? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8")
  : undefined;

// Create http server
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/auth/login", async (req, res) => {
  const { username_or_email, password } = req.body;

  const body = {
    username_or_email:
      username_or_email === ""
        ? process.env.PELOTON_USERNAME
        : username_or_email,
    password: password === "" ? process.env.PELOTON_PASSWORD : password,
    with_pubsub: false,
  };

  fetch("https://api.onepeloton.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      /**
       * even if I get an error response, it still hits this .then()
       */
      res.send(data);
    });
});

app.get("/test", async (req, res) => {
  const username = process.env.PELOTON_USERNAME;
  const password = process.env.PELOTON_PASSWORD;

  fetch("https://api.onepeloton.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username_or_email: username,
      password,
      with_pubsub: false,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

// Add Vite or respective production middlewares
let vite;
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
    if (!isProduction) {
      // Always read fresh template in development
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/entry-server.tsx")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const rendered = await render(url, ssrManifest);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
