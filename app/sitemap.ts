import { localePaths } from "@/lib/i18n/config";
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
      url: `${baseUrl}${localePaths.fr}`,
      lastModified: "2026-10-16",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/llms/home.md`,
      lastModified: "2026-10-16",
    },
  ];
}
