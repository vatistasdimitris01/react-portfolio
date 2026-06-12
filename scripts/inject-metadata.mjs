import { readFileSync, writeFileSync, existsSync } from "fs";
import { join } from "path";

const distDir = join(import.meta.dirname, "..", "dist");
const siteUrl = "https://dvatistas.vercel.app";

const name = "Dimitris Vatistas";
const homepageTitle = `${name} — Full Stack Developer & UI Designer`;
const homepageDesc =
  "Full Stack Web Developer, Swift iOS App Developer, Android App Developer, and UI Designer creating modern websites, mobile apps, and clean digital products.";

const routes = [
  {
    slug: "/",
    title: homepageTitle,
    description: homepageDesc,
    ogTitle: homepageTitle,
    ogDescription: homepageDesc,
    ogImage: `${siteUrl}/og-image.png`,
    twitterCard: "summary_large_image",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Person",
        name,
        jobTitle: "Full Stack Web Developer",
        url: siteUrl,
        email: "vatistasdimitris.01@gmail.com",
        knowsAbout: [
          "Web Development",
          "iOS App Development",
          "Android App Development",
          "UI/UX Design",
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name,
        url: siteUrl,
        description: homepageDesc,
        author: { "@type": "Person", name },
      },
    ],
  },
  {
    slug: "/stays",
    title: "Stays — A calm way to discover and book beautiful stays.",
    description: "A full Swift iOS travel concept for discovering stays, reading property details, selecting dates, and reviewing a complete booking.",
    ogTitle: "Stays App Concept by Dimitris Vatistas",
    ogDescription: "A full Swift iOS travel concept for discovering stays, reading property details, selecting dates, and reviewing a complete booking.",
    ogImage: "https://i.ibb.co/zhfQYrJp/01-explore-listing-mockup.png",
    twitterCard: "summary_large_image",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Stays",
        applicationCategory: "MobileApplication",
        operatingSystem: "iOS",
        description: "A full Swift iOS travel concept for discovering stays, reading property details, selecting dates, and reviewing a complete booking.",
        url: "https://dvatistas.vercel.app/stays",
        author: { "@type": "Person", name },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  },
  {
    slug: "/scoffly",
    title: "Scoffly — Food, groceries, and restaurants in one friendly app.",
    description: "A Swift iOS food ordering concept for browsing restaurants, viewing menus, and customizing meals.",
    ogTitle: "Scoffly App Concept by Dimitris Vatistas",
    ogDescription: "A Swift iOS food ordering concept for browsing restaurants, viewing menus, and customizing meals.",
    ogImage: "https://i.ibb.co/nNM0NSZb/01-food-home-mockup.png",
    twitterCard: "summary_large_image",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Scoffly",
        applicationCategory: "MobileApplication",
        operatingSystem: "iOS",
        description: "A Swift iOS food ordering concept for browsing restaurants, viewing menus, and customizing meals.",
        url: "https://dvatistas.vercel.app/scoffly",
        author: { "@type": "Person", name },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  },
  {
    slug: "/fitzone",
    title: "FitZone — Activity, sleep, and workouts in a clean daily dashboard.",
    description: "A Swift iOS fitness concept for activity rings, health metrics, sleep tracking, and workout discovery.",
    ogTitle: "FitZone App Concept by Dimitris Vatistas",
    ogDescription: "A Swift iOS fitness concept for activity rings, health metrics, sleep tracking, and workout discovery.",
    ogImage: "https://i.ibb.co/RG3J2hZP/01-home-dashboard-mockup.png",
    twitterCard: "summary_large_image",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "FitZone",
        applicationCategory: "MobileApplication",
        operatingSystem: "iOS",
        description: "A Swift iOS fitness concept for activity rings, health metrics, sleep tracking, and workout discovery.",
        url: "https://dvatistas.vercel.app/fitzone",
        author: { "@type": "Person", name },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  },
  {
    slug: "/route",
    title: "Route — Plan, price, and track rides with a clear map flow.",
    description: "A Swift iOS ride booking concept for planning trips, checking fares, confirming payment, and tracking rides.",
    ogTitle: "Route App Concept by Dimitris Vatistas",
    ogDescription: "A Swift iOS ride booking concept for planning trips, checking fares, confirming payment, and tracking rides.",
    ogImage: "https://i.ibb.co/gnD9hBV/01-map-home-mockup.png",
    twitterCard: "summary_large_image",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Route",
        applicationCategory: "MobileApplication",
        operatingSystem: "iOS",
        description: "A Swift iOS ride booking concept for planning trips, checking fares, confirming payment, and tracking rides.",
        url: "https://dvatistas.vercel.app/route",
        author: { "@type": "Person", name },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  },
  {
    slug: "/mono",
    title: "Mono — Organize your closet and discover outfits with AI.",
    description: "A Swift iOS AI styling concept for cataloging clothes, receiving outfit recommendations, and building a personal wardrobe.",
    ogTitle: "Mono App Concept by Dimitris Vatistas",
    ogDescription: "A Swift iOS AI styling concept for cataloging clothes, receiving outfit recommendations, and building a personal wardrobe.",
    ogImage: "https://i.ibb.co/0Vy8gy8V/IMG-1005-portrait.png",
    twitterCard: "summary_large_image",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Mono",
        applicationCategory: "MobileApplication",
        operatingSystem: "iOS",
        description: "A Swift iOS AI styling concept for cataloging clothes, receiving outfit recommendations, and building a personal wardrobe.",
        url: "https://dvatistas.vercel.app/mono",
        author: { "@type": "Person", name },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  },
  {
    slug: "/strm",
    title: "STRM — Discover movies and TV shows with a clean streaming experience.",
    description: "A Swift iOS streaming concept for browsing movies, viewing TV show details, exploring seasons and episodes, and playing content.",
    ogTitle: "STRM App Concept by Dimitris Vatistas",
    ogDescription: "A Swift iOS streaming concept for browsing movies, viewing TV show details, exploring seasons and episodes, and playing content.",
    ogImage: "https://i.ibb.co/xK0PszX9/IMG-1013-portrait.png",
    twitterCard: "summary_large_image",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "STRM",
        applicationCategory: "MobileApplication",
        operatingSystem: "iOS",
        description: "A Swift iOS streaming concept for browsing movies, viewing TV show details, exploring seasons and episodes, and playing content.",
        url: "https://dvatistas.vercel.app/strm",
        author: { "@type": "Person", name },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  },
  {
    slug: "/vest",
    title: "Vest — Track stocks, manage your portfolio, and discover new investments.",
    description: "A Swift iOS stock trading concept for tracking watchlists, searching stocks, viewing portfolio performance, and managing investments.",
    ogTitle: "Vest App Concept by Dimitris Vatistas",
    ogDescription: "A Swift iOS stock trading concept for tracking watchlists, searching stocks, viewing portfolio performance, and managing investments.",
    ogImage: "https://i.ibb.co/G3JMN1Kr/IMG-1017-portrait.png",
    twitterCard: "summary_large_image",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Vest",
        applicationCategory: "MobileApplication",
        operatingSystem: "iOS",
        description: "A Swift iOS stock trading concept for tracking watchlists, searching stocks, viewing portfolio performance, and managing investments.",
        url: "https://dvatistas.vercel.app/vest",
        author: { "@type": "Person", name },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
    ],
  },
];

function escapeXml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function injectMeta(html, meta) {
  const jsonLdHtml = meta.jsonLd
    .map((obj) => `    <script type="application/ld+json">${JSON.stringify(obj)}</script>`)
    .join("\n");

  let result = html;

  // Replace title
  result = result.replace(/<title>.*?<\/title>/s, `<title>${escapeXml(meta.title)}</title>`);

  // Replace description meta
  result = result.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeXml(meta.description)}" />`,
  );

  // Replace OG tags
  const ogPairs = [
    ["og:title", meta.ogTitle],
    ["og:description", meta.ogDescription],
    ["og:url", meta.slug === "/" ? "https://dvatistas.vercel.app/" : `https://dvatistas.vercel.app${meta.slug}`],
    ["og:image", meta.ogImage],
  ];
  for (const [prop, content] of ogPairs) {
    const val = escapeXml(content);
    const regex = new RegExp(`<meta\\s+property="${prop}"\\s+content="[^"]*"\\s*\\/?>`, "i");
    result = result.replace(regex, `<meta property="${prop}" content="${val}" />`);
  }

  // Replace twitter tags
  const twitterPairs = [
    ["twitter:card", meta.twitterCard],
    ["twitter:title", meta.ogTitle],
    ["twitter:description", meta.ogDescription],
    ["twitter:image", meta.ogImage],
  ];
  for (const [nm, content] of twitterPairs) {
    const val = escapeXml(content);
    const regex = new RegExp(`<meta\\s+name="${nm}"\\s+content="[^"]*"\\s*\\/?>`, "i");
    result = result.replace(regex, `<meta name="${nm}" content="${val}" />`);
  }

  // Remove existing JSON-LD scripts
  result = result.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/g, "");

  // Inject new JSON-LD before </head>
  result = result.replace("</head>", `${jsonLdHtml}\n  </head>`);

  return result;
}

// Process each route
let count = 0;
for (const meta of routes) {
  const routeDir = meta.slug === "/" ? distDir : join(distDir, meta.slug.slice(1));
  const indexPath = join(routeDir, "index.html");

  if (!existsSync(indexPath)) {
    console.warn(`Skipping ${meta.slug}: ${indexPath} not found`);
    continue;
  }

  const html = readFileSync(indexPath, "utf8");
  const updated = injectMeta(html, meta);
  writeFileSync(indexPath, updated, "utf8");
  count++;
}

console.log(`Metadata injected into ${count} pages.`);
