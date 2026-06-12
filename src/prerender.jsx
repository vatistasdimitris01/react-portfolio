import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { projects } from "./data/projects";

export function prerender(data) {
  const allRoutes = ["/", ...projects.map((p) => `/${p.title.toLowerCase()}`)];
  const html = renderToString(
    <StaticRouter location={data.url}>
      <AppRoutes />
    </StaticRouter>,
  );
  return {
    html,
    links: new Set(allRoutes),
  };
}
