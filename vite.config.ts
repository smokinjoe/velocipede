import path from "path";
import react from "@vitejs/plugin-react";

import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";
// import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      client: path.resolve(__dirname, "src/client"),
      // server: path.resolve(__dirname, "src/server"),
      common: path.resolve(__dirname, "src/common"),
    },
  },
});
