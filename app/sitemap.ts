import { now } from "@/lib/data/now.data";
import { locales, pagePath } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";
import type { MetadataRoute } from "next";

const LAST_MODIFIED = new Date("2026-10-20");

/** Every page, with the date it last changed. */
const pages = [
  { path: "", lastModified: LAST_MODIFIED },
  { path: "/now", lastModified: new Date(now.lastUpdated) },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const url = (locale: (typeof locales)[number], path: string) =>
    `${base}${pagePath(locale, path)}`;

  return pages.flatMap(({ path, lastModified }) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, url(locale, path)]),
    );
    return locales.map((locale) => ({
      url: url(locale, path),
      lastModified,
      alternates: { languages },
    }));
  });
}
