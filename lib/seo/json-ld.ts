import { aaimeraud } from "@/lib/data/aaimeraud.data";
import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";
import { LinkType } from "@/lib/types/links.types";

/** Structured data (schema.org) describing the site and its owner, per locale. */
export const getJsonLd = (locale: Locale) => {
  const t = getDictionary(locale);
  const { profile, socials } = aaimeraud;

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: profile.username,
    alternateName: `${profile.fname} ${profile.lname}`,
    url: SITE_URL,
    description: t.meta.description,
    inLanguage: ["en", "fr"],
    author: { "@id": `${SITE_URL}/#person` },
  };

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: `${profile.fname} ${profile.lname}`,
    alternateName: profile.username,
    url: SITE_URL,
    image: `${SITE_URL}${profile.portrait}`,
    description: t.meta.description,
    jobTitle: t.profile.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: t.about.company,
    },
    alumniOf: {
      "@type": "Organization",
      name: profile.status.studies.link.label,
      url: profile.status.studies.link.url,
    },
    homeLocation: {
      "@type": "Place",
      name: "Paris, France",
      geo: {
        "@type": "GeoCoordinates",
        latitude: 48.8566,
        longitude: 2.3522,
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    knowsLanguage: ["en", "fr"],
    sameAs: socials
      .filter((social) => social.type !== LinkType.email)
      .map((social) => social.url),
  };

  return { "@context": "https://schema.org", "@graph": [website, person] };
};

/** JSON.stringify plus escaping of "<", as recommended by Next.js to avoid XSS. */
export const serializeJsonLd = (data: object) =>
  JSON.stringify(data).replace(/</g, "\\u003c");
