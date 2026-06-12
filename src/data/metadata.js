export const siteUrl = "https://dvatistas.vercel.app";

const name = "Dimitris Vatistas";
const title = `${name} — Full Stack Developer & UI Designer`;
const description =
  "Full Stack Web Developer, Swift iOS App Developer, Android App Developer, and UI Designer creating modern websites, mobile apps, and clean digital products.";

export const homepageMeta = {
  route: "/",
  title,
  description,
  ogTitle: title,
  ogDescription: description,
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
      description,
      author: { "@type": "Person", name },
    },
  ],
};

function buildProjectMeta(project) {
  const slug = project.title.toLowerCase();
  const url = `${siteUrl}/${slug}`;
  const pageTitle = `${project.title} — ${project.tagline}`;
  return {
    route: `/${slug}`,
    title: pageTitle,
    description: project.description,
    ogTitle: `${project.title} App Concept by ${name}`,
    ogDescription: project.description,
    ogImage: project.images[0],
    twitterCard: "summary_large_image",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: project.title,
        applicationCategory: "MobileApplication",
        operatingSystem: "iOS",
        description: project.description,
        url,
        author: { "@type": "Person", name },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
    ],
  };
}

export function buildAllMetadata(projects) {
  return [homepageMeta, ...projects.map(buildProjectMeta)];
}
