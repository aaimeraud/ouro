import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import { pagePath, type Locale } from "./config";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

const dictionaries = { en, fr } as const;

export const getDictionary = (locale: Locale) => dictionaries[locale];

type PageMeta = { title: string; description: string };

/**
 * Page metadata for a locale, including the alternate-language links.
 * Pass `path` for a sub-page, e.g. getMetadata("fr", "/about"), and `meta`
 * to override the site-wide title and description.
 */
export const getMetadata = (
  locale: Locale,
  path = "",
  meta: PageMeta = getDictionary(locale).meta,
): Metadata => {
  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: pagePath(locale, path),
      languages: {
        en: pagePath("en", path),
        fr: pagePath("fr", path),
        "x-default": pagePath("en", path),
      },
    },
  };
};
