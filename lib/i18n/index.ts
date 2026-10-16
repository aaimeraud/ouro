import type { Metadata } from "next";
import { localePaths, type Locale } from "./config";
import { en } from "./dictionaries/en";
import { fr } from "./dictionaries/fr";

const dictionaries = { en, fr } as const;

export const getDictionary = (locale: Locale) => dictionaries[locale];

/** Page metadata for a locale, including the alternate-language links. */
export const getMetadata = (locale: Locale): Metadata => {
  const { meta } = getDictionary(locale);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: localePaths[locale],
      languages: localePaths,
    },
  };
};
