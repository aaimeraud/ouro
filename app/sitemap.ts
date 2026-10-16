import type { MetadataRoute } from "next";

const baseUrl = "https://aaimeraud.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: "2026-10-16",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/llms/home.md`,
      lastModified: "2026-10-16",
    },
  ];
}
