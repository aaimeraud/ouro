import type { Localized } from "../i18n/config";
import type { ProjectSlug } from "../types/projects.types";

export type CvSkill = {
  label: Localized;
  items: Localized;
};

export type CvEntry = {
  title: Localized;
  /** Company or school */
  org: string;
  place: Localized;
  /** e.g. "Avril 2026 – Octobre 2026"; omitted when unknown */
  period?: Localized;
  points?: Localized[];
};

export type CvProject = {
  /** Links the entry to a homepage project, which provides its name, tags and URLs */
  slug: ProjectSlug;
  /** Shown next to the name, e.g. "Novembre 2026" */
  date?: Localized;
  description: Localized;
};

type Cv = {
  name: string;
  headline: Localized;
  location: Localized;
  email: string;
  links: { label: string; url: string }[];
  profile: Localized;
  skills: CvSkill[];
  experience: CvEntry[];
  education: CvEntry[];
  /** Most recent first */
  projects: CvProject[];
};

/**
 * Content of the /cv page, copied from public/pdf/daniel_fortune_[public].pdf.
 * Keep both in sync when one changes.
 */
export const cv: Cv = {
  name: "Daniel Fortuné",
  headline: {
    en: "Junior Full-Stack Developer",
    fr: "Développeur Full-Stack Junior",
  },
  location: { en: "Paris, France", fr: "Paris, France" },
  email: "danielfortune.pro@proton.me",
  links: [
    // { label: "aaimeraud.me", url: "https://aaimeraud.me" },
    { label: "GitHub", url: "https://github.com/aaimeraud" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/danielfortun%C3%A9/",
    },
  ],

  profile: {
    en: "Third-year student in a Web Development Bachelor at .decode (Paris), already through a full-stack apprenticeship. I'm looking for a full-stack apprenticeship (backend/frontend) in Paris or the Île-de-France region, on a rhythm of 3 weeks at the company and 1 week at school, available immediately. Comfortable prototyping fast by steering AI agents, I'm strengthening my fundamentals by coding myself: Rust, CS50 (Harvard), SQL. Fluent in French and English.",
    fr: "Étudiant en 3e année de Bachelor Développement Web à .decode (Paris), déjà passé par une alternance full-stack. Je recherche une alternance full-stack (backend/frontend) à Paris ou en Île-de-France, rythme 3 semaines en entreprise / 1 semaine à l'école, disponible immédiatement. À l'aise pour prototyper vite en pilotant des agents IA, je consolide mes fondamentaux en codant moi-même : Rust, CS50 (Harvard), SQL. Français et anglais courants.",
  },

  skills: [
    {
      label: { en: "Languages", fr: "Langages" },
      items: {
        en: "TypeScript, JavaScript, HTML, CSS | familiar with: PHP, Java, C++ | learning: Rust, Python, SQL",
        fr: "TypeScript, JavaScript, HTML, CSS | notions : PHP, Java, C++ | en apprentissage : Rust, Python, SQL",
      },
    },
    {
      label: { en: "Frameworks", fr: "Frameworks" },
      items: {
        en: "React, Next.js, TailwindCSS",
        fr: "React, Next.js, TailwindCSS",
      },
    },
    {
      label: { en: "Databases", fr: "Bases de données" },
      items: { en: "PostgreSQL, Supabase", fr: "PostgreSQL, Supabase" },
    },
    {
      label: { en: "Tools", fr: "Outils" },
      items: {
        en: "Git, GitHub, Docker, Bash/Linux, Figma, Penpot",
        fr: "Git, GitHub, Docker, Bash/Linux, Figma, Penpot",
      },
    },
    {
      label: { en: "CMS", fr: "CMS" },
      items: { en: "WordPress, PayloadCMS", fr: "WordPress, PayloadCMS" },
    },
    {
      label: { en: "AI", fr: "IA" },
      items: {
        en: "Agentic development (Claude Code, OpenCode, T3 Code), automation workflows (n8n)",
        fr: "Développement agentique (Claude Code, OpenCode, T3 Code), workflows d'automatisation (n8n)",
      },
    },
  ],

  experience: [
    {
      title: {
        en: "Full-Stack Developer (internship, then apprenticeship)",
        fr: "Développeur Full-Stack (stage puis alternance)",
      },
      org: "ComKani",
      place: { en: "Paris, France", fr: "Paris, France" },
      period: {
        en: "April – November 2026 (internship Apr.–Jul., apprenticeship Aug.–Nov.)",
        fr: "Avril – Novembre 2026 (stage avr.–juil., alternance août–nov.)",
      },
      points: [
        {
          en: "Redesigned a WordPress site for an architecture firm: PHP version upgrade and identical reproduction",
          fr: "Refonte d'un site WordPress pour un cabinet d'architecture : montée de version PHP et reproduction à l'identique",
        },
        {
          en: "Built the website of a taxi company with Next.js and PayloadCMS",
          fr: "Création du site d'une société de taxi avec Next.js et PayloadCMS",
        },
        {
          en: "Started a B2B WordPress site for orders and quote requests",
          fr: "Démarrage d'un site WordPress B2B de commande et de demande de devis",
        },
        {
          en: "MVP of a SaaS: authentication and PostgreSQL database modeling with Supabase",
          fr: "MVP d'un SaaS : authentification et modélisation de la base PostgreSQL avec Supabase",
        },
        {
          en: "Maintained WordPress/PHP sites: backups, CSS and display fixes",
          fr: "Maintenance de sites WordPress/PHP : sauvegardes, corrections CSS et d'affichage",
        },
        {
          en: "Project preparation: competitive research, moodboards",
          fr: "Préparation des projets : veille concurrentielle, moodboards",
        },
      ],
    },
    {
      title: {
        en: "IT Support Assistant (observation internship)",
        fr: "Assistant Support Informatique (stage d'observation)",
      },
      org: "Chloé",
      place: { en: "Paris, France", fr: "Paris, France" },
      period: { en: "March 2022", fr: "Mars 2022" },
      points: [
        {
          en: "Managed access rights, handled tickets via Microsoft Teams, inventoried the IT equipment",
          fr: "Gestion des droits d'accès, traitement des tickets via Microsoft Teams, inventaire du parc informatique",
        },
      ],
    },
  ],

  education: [
    {
      title: {
        en: "Web Development Bachelor (Bac+3)",
        fr: "Bachelor Développement Web (Bac+3)",
      },
      org: ".decode",
      place: { en: "Paris 75008, France", fr: "Paris 75008, France" },
      period: { en: "2025 – 2027", fr: "2025 – 2027" },
      points: [
        {
          en: "Algorithms and data structures (Java), object-oriented programming (advanced PHP)",
          fr: "Algorithmie et structures de données (Java), programmation orientée objet (PHP avancé)",
        },
        {
          en: "Relational modeling and SQL optimization (PostgreSQL), Docker, Git and teamwork",
          fr: "Modélisation relationnelle et optimisation SQL (PostgreSQL), Docker, Git et travail collaboratif",
        },
        {
          en: "Project management (audit, specifications, tenders), web accessibility (RGAA), agentic AI",
          fr: "Gestion de projet (audit, cahier des charges, appels d'offres), accessibilité web (RGAA), IA agentique",
        },
      ],
    },
    {
      title: {
        en: "French Baccalauréat STMG (management and technology)",
        fr: "Baccalauréat STMG",
      },
      org: "Lycée George Sand",
      place: { en: "Domont 95330, France", fr: "Domont 95330, France" },
      period: { en: "2019 – 2023", fr: "2019 – 2023" },
    },
  ],

  projects: [
    {
      slug: "spacejo",
      date: { en: "November 2026", fr: "Novembre 2026" },
      description: {
        en: "Online multiplayer card game inspired by Skyjo. Fast prototype built with agentic development: I defined the architecture (Rust API, real-time, database, React front-end) and led the agents to a working game. Stack: Rust, React, open source.",
        fr: "Jeu de cartes multijoueur en ligne inspiré de Skyjo. Prototype rapide en développement agentique : j'ai défini l'architecture (API Rust, temps réel, base de données, front React) et dirigé les agents jusqu'à un jeu fonctionnel. Stack : Rust, React, open source.",
      },
    },
    {
      slug: "aarshi",
      date: { en: "October 2026", fr: "Octobre 2026" },
      description: {
        en: "Rust CLI that generates a multilingual (i18n) Next.js site in one command: route tree, typed dictionaries, sitemap and language switcher. Designed and led through agentic development. Stack: Rust, open source.",
        fr: "CLI en Rust qui génère un site Next.js multilingue (i18n) en une commande : arbre de routes, dictionnaires typés, sitemap et sélecteur de langue. Conçu et piloté en développement agentique. Stack : Rust, open source.",
      },
    },
    {
      slug: "ouro",
      date: { en: "October 2026", fr: "Octobre 2026" },
      description: {
        en: "Personal website, rebuilt from scratch with Next.js and React, with special attention to UI/UX design. Stack: Next.js, React.",
        fr: "Site personnel, refait de zéro avec Next.js et React, avec une attention particulière au design UI/UX. Stack : Next.js, React.",
      },
    },
    {
      slug: "aimerss",
      date: { en: "June 2025", fr: "Juin 2025" },
      description: {
        en: "RSS feed aggregator (dynamic routes, RSS parsing), responsive, deployed on Vercel. Stack: Next.js, TailwindCSS.",
        fr: "Agrégateur de flux RSS (routes dynamiques, parsing RSS), responsive, déployé sur Vercel. Stack : Next.js, TailwindCSS.",
      },
    },
  ],
};
