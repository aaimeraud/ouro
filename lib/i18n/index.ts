import { SITE_URL } from "@/lib/site";
import type { Metadata } from "next";
import { pagePath, type Locale } from "./config";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

const dictionaries = { en, fr } as const;

export const getDictionary = (locale: Locale) => dictionaries[locale];

/**
 * Page metadata for a locale, including the alternate-language links.
 * Pass `path` for a sub-page, e.g. getMetadata("fr", "/about").
 */
export const getMetadata = (locale: Locale, path = ""): Metadata => {
  const { meta } = getDictionary(locale);
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
