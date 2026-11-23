import type { Localized } from "../i18n/config";
import type { ProjectSlug } from "../types/projects.types";

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
  lastUpdated: "2026-11-24",
  location: { en: "Paris, France", fr: "Paris, France" },

  work: [
    {
      role: {
        en: "Looking for an apprenticeship",
        fr: "Recherche d'une alternance",
      },
      place: {
        en: "in Paris and Île-de-France, as a full-stack developer (backend / frontend)",
        fr: "à Paris et en Île-de-France, en développement full-stack (backend / frontend)",
      },
      note: {
        en: "Three weeks at a company, one week at school.",
        fr: "Trois semaines en entreprise, une semaine en cours.",
      },
    },
    // {
    //   role: {}
    // },
    {
      role: { en: "Bachelor 3 student at", fr: "Étudiant en Bachelor 3 à" },
      place: { en: ".decode", fr: ".decode" },
      url: "https://ecole-decode.fr",
    },
  ],

  learning: [
    {
      topic: "CS50",
      note: {
        en: "Following Harvard's introduction to computer science.",
        fr: "Je suis le cours d'introduction à l'informatique de Harvard.",
      },
    },
    {
      topic: "Systems programming",
      note: {
        en: "Rust and Go, to understand how things work under the hood.",
        fr: "Rust et Go, pour comprendre comment les choses fonctionnent sous le capot.",
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
      topic: "SQL",
      note: {
        en: "Relational databases and query optimization.",
        fr: "Bases de données relationnelles et optimisation des requêtes.",
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
      name: "skills",
      slug: "skills",
      note: {
        en: "Building a collection of AI agent skills, one installable plugin per use case.",
        fr: "Je construis une collection de skills pour agents IA, un plugin installable par cas d'usage.",
      },
    },
    {
      name: "rep(g)o",
      note: {
        en: "Writing a CLI that creates GitHub repos from a template to learn Go.",
        fr: "J'écris une CLI qui crée des dépôts GitHub depuis une template pour apprendre le Go.",
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
