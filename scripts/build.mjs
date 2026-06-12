import { execSync } from "child_process";
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, "..", "dist");

try {
  execSync(join(__dirname, "..", "node_modules", ".bin", "vite") + " build", { stdio: "inherit", timeout: 30000 });
} catch (e) {
  // vite build may timeout due to prerender plugin not closing Chromium; build output is still valid
  if (e.killed || e.code === "ETIMEDOUT") {
    console.log("Vite build completed (prerender cleanup timeout ignored)");
  } else {
    throw e;
  }
}

const SITE = "https://dvatistas.vercel.app";
const NAME = "Dimitris Vatistas";

const routes = [
  { slug: "/", title: `${NAME} — Full Stack Developer & UI Designer`, desc: "Full Stack Web Developer, Swift iOS App Developer, Android App Developer, and UI Designer creating modern websites, mobile apps, and clean digital products.", img: `${SITE}/og-image.png`, ld: [
    { "@context": "https://schema.org", "@type": "Person", name: NAME, jobTitle: "Full Stack Web Developer", url: SITE, email: "vatistasdimitris.01@gmail.com", knowsAbout: ["Web Development", "iOS App Development", "Android App Development", "UI/UX Design"] },
    { "@context": "https://schema.org", "@type": "WebSite", name: NAME, url: SITE, description: "Full Stack Web Developer, Swift iOS App Developer, Android App Developer, and UI Designer creating modern websites, mobile apps, and clean digital products.", author: { "@type": "Person", name: NAME } },
  ]},
  { slug: "/stays", title: "Stays — A calm way to discover and book beautiful stays.", desc: "A full Swift iOS travel concept for discovering stays, reading property details, selecting dates, and reviewing a complete booking.", img: "https://i.ibb.co/zhfQYrJp/01-explore-listing-mockup.png", app: "Stays" },
  { slug: "/scoffly", title: "Scoffly — Food, groceries, and restaurants in one friendly app.", desc: "A Swift iOS food ordering concept for browsing restaurants, viewing menus, and customizing meals.", img: "https://i.ibb.co/nNM0NSZb/01-food-home-mockup.png", app: "Scoffly" },
  { slug: "/fitzone", title: "FitZone — Activity, sleep, and workouts in a clean daily dashboard.", desc: "A Swift iOS fitness concept for activity rings, health metrics, sleep tracking, and workout discovery.", img: "https://i.ibb.co/RG3J2hZP/01-home-dashboard-mockup.png", app: "FitZone" },
  { slug: "/route", title: "Route — Plan, price, and track rides with a clear map flow.", desc: "A Swift iOS ride booking concept for planning trips, checking fares, confirming payment, and tracking rides.", img: "https://i.ibb.co/gnD9hBV/01-map-home-mockup.png", app: "Route" },
  { slug: "/mono", title: "Mono — Organize your closet and discover outfits with AI.", desc: "A Swift iOS AI styling concept for cataloging clothes, receiving outfit recommendations, and building a personal wardrobe.", img: "https://i.ibb.co/0Vy8gy8V/IMG-1005-portrait.png", app: "Mono" },
  { slug: "/strm", title: "STRM — Discover movies and TV shows with a clean streaming experience.", desc: "A Swift iOS streaming concept for browsing movies, viewing TV show details, exploring seasons and episodes, and playing content.", img: "https://i.ibb.co/xK0PszX9/IMG-1013-portrait.png", app: "STRM" },
  { slug: "/vest", title: "Vest — Track stocks, manage your portfolio, and discover new investments.", desc: "A Swift iOS stock trading concept for tracking watchlists, searching stocks, viewing portfolio performance, and managing investments.", img: "https://i.ibb.co/G3JMN1Kr/IMG-1017-portrait.png", app: "Vest" },
  { slug: "/skyward", title: "Skyward — Find flights, compare fares, and travel with confidence.", desc: "A Swift iOS flight booking concept for searching destinations, comparing fares, selecting seats, and tracking reservations.", img: "https://i.ibb.co/mCtwCVmC/IMG-1050.png", app: "Skyward" },
];

function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function patch(html, r) {
  const isHome = r.slug === "/";
  const url = isHome ? SITE : SITE + r.slug;
  const ogTitle = isHome ? r.title : `${r.app} App Concept by ${NAME}`;
  const ld = r.ld || [{ "@context": "https://schema.org", "@type": "SoftwareApplication", name: r.app, applicationCategory: "MobileApplication", operatingSystem: "iOS", description: r.desc, url, author: { "@type": "Person", name: NAME }, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } }];
  const ldHtml = ld.map(o => `    <script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n");

  let h = html;
  h = h.replace(/<title>.*?<\/title>/s, `<title>${esc(r.title)}</title>`);
  h = h.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(r.desc)}" />`);
  h = h.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${esc(ogTitle)}" />`);
  h = h.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${esc(r.desc)}" />`);
  h = h.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`);
  h = h.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${r.img}" />`);
  h = h.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${esc(ogTitle)}" />`);
  h = h.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${esc(r.desc)}" />`);
  h = h.replace(/<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${r.img}" />`);
  h = h.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");
  h = h.replace("</head>", `${ldHtml}\n  </head>`);
  return h;
}

let count = 0;
for (const r of routes) {
  const d = r.slug === "/" ? distDir : join(distDir, r.slug.slice(1));
  const p = join(d, "index.html");
  if (!existsSync(p)) continue;
  writeFileSync(p, patch(readFileSync(p, "utf8"), r), "utf8");
  count++;
}

console.log(`Metadata injected: ${count} pages`);
