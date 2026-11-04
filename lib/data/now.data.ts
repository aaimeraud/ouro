import type { Locale } from "../i18n/config";
import type { ProjectSlug } from "../types/projects.types";

/** A text written in every locale: TypeScript refuses a missing translation. */
type Localized = Record<Locale, string>;

export type NowWork = {
  role: Localized;
  place: Localized;
  /** Shown after the place, e.g. the stack or the schedule */
  note?: Localized;
  url?: string;
  /** e.g. "2025", shown next to the role */
  since?: string;
};

export type NowLearning = {
  topic: string;
  note?: Localized;
};

export type NowProject = {
  name: string;
  note: Localized;
  /** Links the entry to a project of the homepage, which provides its URL */
  slug?: ProjectSlug;
  /** Used when the project isn't on the homepage */
  url?: string;
};

/**
 * Content of the /now page. Edit this file to update the page,
 * then bump `lastUpdated` (YYYY-MM-DD).
 */
type Now = {
  /** YYYY-MM-DD */
  lastUpdated: string;
  location: Localized;
  work: NowWork[];
  learning: NowLearning[];
  projects: NowProject[];
};

export const now: Now = {
  lastUpdated: "2026-11-04",
  location: { en: "Paris, France", fr: "Paris, France" },

  work: [
    {
      role: {
        en: "full-stack web developer apprentice",
        fr: "alternant développeur web full-stack",
      },
      place: {
        en: "a Parisian communication agency",
        fr: "une agence de communication parisienne",
      },
      note: {
        en: "mostly WordPress and Next.js.",
        fr: "surtout du WordPress et du Next.js.",
      },
    },
    {
      role: { en: "Bachelor 3 student", fr: "étudiant en Bachelor 3" },
      place: { en: ".decode", fr: ".decode" },
      url: "https://ecole-decode.fr",
    },
  ],

  learning: [
    {
      topic: "Rust",
      note: {
        en: "to understand programming fundamentals in depth.",
        fr: "pour comprendre les fondamentaux de la programmation en profondeur.",
      },
    },
    {
      topic: "Python",
      note: {
        en: "slowly but surely.",
        fr: "doucement mais sûrement.",
      },
    },
    {
      topic: "agentic coding",
      note: {
        en: "skills, agents and how to keep them on track.",
        fr: "skills, agents et comment les garder sur les rails.",
      },
    },
  ],

  projects: [
    {
      name: "spacejo",
      slug: "spacejo",
      note: {
        en: "polishing the online Skyjo i made for my friends.",
        fr: "je peaufine le Skyjo en ligne fait pour mes amis.",
      },
    },
    {
      name: "aarshi",
      slug: "aarshi",
      note: {
        en: "adding commands to my Next.js scaffolding CLI.",
        fr: "j'ajoute des commandes à ma CLI de scaffolding Next.js.",
      },
    },
    {
      name: "ouro",
      slug: "ouro",
      note: {
        en: "this website, including the page you're reading.",
        fr: "ce site, y compris la page que tu lis.",
      },
    },
  ],
};
