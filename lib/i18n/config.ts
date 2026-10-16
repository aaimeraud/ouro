export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Public URL of each locale. English is the base site, served at "/". */
export const localePaths: Record<Locale, string> = {
  en: "/",
  fr: "/fr",
};
