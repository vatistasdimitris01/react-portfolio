import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./AppRoutes";
import { projects } from "./data/projects";

export function prerender(data) {
  const allRoutes = ["/", ...projects.map((p) => `/${p.title.toLowerCase()}`)];
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={data.url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>,
  );
  return {
    html,
    links: new Set(allRoutes),
  };
}
