export const locales = ["en", "fr"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Public URL of each locale. English is the base site, served at "/". */
export const localePaths: Record<Locale, string> = {
  en: "/",
  fr: "/fr",
};

/** Public URL of a page within a locale, e.g. pagePath("fr", "/about") === "/fr/about". */
export const pagePath = (locale: Locale, path = ""): string => {
  const base = localePaths[locale] === "/" ? "" : localePaths[locale];
  return `${base}${path}` || "/";
};
