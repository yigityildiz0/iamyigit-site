import type { MetadataRoute } from "next";

const base = "https://iamyigit.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/hakkimda", "/isler", "/yazilar", "/iletisim"];
  const locales = ["tr", "en"];
  return locales.flatMap((l) =>
    pages.map((p) => ({
      url: `${base}/${l}${p}`,
      lastModified: new Date(),
    }))
  );
}
