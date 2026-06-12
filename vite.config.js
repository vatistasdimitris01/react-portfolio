import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve("src/prerender.jsx"),
      additionalPrerenderRoutes: ["/stays", "/scoffly", "/fitzone", "/route", "/mono", "/strm", "/vest"],
      previewMiddlewareFallback: "/index.html",
    }),
  ],
});
