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
        en: "Full-stack web developer apprentice",
        fr: "Alternant développeur web full-stack",
      },
      place: {
        en: "a Parisian communication agency",
        fr: "une agence de communication parisienne",
      },
      note: {
        en: "Mostly WordPress and Next.js.",
        fr: "Surtout du WordPress et du Next.js.",
      },
    },
    // {
    //   role: {}
    // },
    {
      role: { en: "Bachelor 3 student", fr: "Étudiant en Bachelor 3" },
      place: { en: ".decode", fr: ".decode" },
      url: "https://ecole-decode.fr",
    },
  ],

  learning: [
    {
      topic: "Rust",
      note: {
        en: "To understand programming fundamentals in depth.",
        fr: "Pour comprendre les fondamentaux de la programmation en profondeur.",
      },
    },
    {
      topic: "Python",
      note: {
        en: "Slowly but surely.",
        fr: "Doucement mais sûrement.",
      },
    },
    {
      topic: "Agentic Coding",
      note: {
        en: "Skills, agents and how to keep them on track.",
        fr: "Skills, agents et comment les garder sur les rails.",
      },
    },
  ],

  projects: [
    {
      name: "spacejo",
      slug: "spacejo",
      note: {
        en: "Polishing the online Skyjo I made for my friends.",
        fr: "Je peaufine le Skyjo en ligne fait pour mes amis.",
      },
    },
    // {
    //   name: "aarshi",
    //   slug: "aarshi",
    //   note: {
    //     en: "Adding commands to my Next.js scaffolding CLI.",
    //     fr: "J'ajoute des commandes à ma CLI de scaffolding Next.js.",
    //   },
    // },
  ],
};
