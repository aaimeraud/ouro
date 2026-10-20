import { localePaths } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

const LAST_MODIFIED = new Date("2026-10-20");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");

  const languages = Object.fromEntries(
    Object.entries(localePaths).map(([locale, path]) => [
      locale,
      `${base}${path}`,
    ]),
  );

  return Object.values(localePaths).map((path) => ({
    url: `${base}${path}`,
    lastModified: LAST_MODIFIED,
    alternates: { languages },
  }));
}
