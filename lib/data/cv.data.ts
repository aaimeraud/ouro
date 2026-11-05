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
  name: string;
  /** Links the entry to a homepage project, which provides its URLs */
  slug: ProjectSlug;
  /** Shown next to the name, e.g. "Novembre 2026" */
  date?: Localized;
  description: Localized;
  tags: string[];
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
    en: "Third-year student in a Web Development Bachelor at .decode (Paris) and full-stack developer apprentice. I'm looking for an apprenticeship in software development, with a strong interest in code quality and low-level concepts. I'm learning Rust alongside my web stack (React, Next.js, PostgreSQL). Comfortable in French and English (fluent).",
    fr: "Étudiant en 3e année de Bachelor Développement Web à .decode (Paris) et développeur full-stack en alternance. Je recherche une alternance en développement logiciel, avec un fort intérêt pour la qualité du code et les concepts bas niveau. J'apprends Rust en parallèle de ma stack web (React, Next.js, PostgreSQL). À l'aise en français et en anglais (courant).",
  },

  skills: [
    {
      label: { en: "Languages", fr: "Langages" },
      items: {
        en: "TypeScript, JavaScript, Python (learning), PHP, Rust (learning), C++, Java, HTML, CSS",
        fr: "TypeScript, JavaScript, Python (apprentissage), PHP, Rust (apprentissage), C++, Java, HTML, CSS",
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
      label: { en: "AI", fr: "Parcours IA" },
      items: {
        en: "Agentic coding (Claude Code, OpenCode, T3 Code), automation workflows (n8n)",
        fr: "Agentic coding (Claude Code, OpenCode, T3 Code), workflows d'automatisation (n8n)",
      },
    },
  ],

  experience: [
    {
      title: {
        en: "Full-Stack Developer (apprenticeship)",
        fr: "Développeur Full-Stack (alternance)",
      },
      org: "ComKani",
      place: { en: "Paris, France", fr: "Paris, France" },
      period: {
        en: "April 2026 – October 2026",
        fr: "Avril 2026 – Octobre 2026",
      },
      points: [
        {
          en: "Worked in a communication agency on a variety of client projects",
          fr: "Travail au sein d'une agence de communication sur des projets clients variés",
        },
        {
          en: "Built websites and landing pages with WordPress and Next.js",
          fr: "Développement de sites et landing pages avec WordPress et Next.js",
        },
        {
          en: "Managed PostgreSQL databases through Supabase for a SaaS MVP",
          fr: "Gestion de bases de données PostgreSQL via Supabase pour un MVP SaaS",
        },
        {
          en: "Took part in the preparation phases: competitive research, moodboards",
          fr: "Participation aux phases de préparation : veille concurrentielle, moodboards",
        },
      ],
    },
    {
      title: {
        en: "IT Support Assistant (internship)",
        fr: "Assistant Support Informatique (stage)",
      },
      org: "Chloé",
      place: { en: "Paris, France", fr: "Paris, France" },
      points: [
        {
          en: "Managed access rights and handled tickets through Microsoft Teams",
          fr: "Gestion des droits d'accès et traitement des tickets via Microsoft Teams",
        },
        {
          en: "Inventoried and tracked the IT equipment",
          fr: "Inventaire et suivi du parc informatique",
        },
      ],
    },
  ],

  education: [
    {
      title: {
        en: "Web Development Bachelor (3 years after high school)",
        fr: "Bachelor Développement Web (Bac+3)",
      },
      org: ".decode",
      place: { en: "Paris 75008, France", fr: "Paris 75008, France" },
      period: { en: "2025 – 2027", fr: "2025 – 2027" },
      points: [
        {
          en: "Algorithms and data structures (Java)",
          fr: "Algorithmie et structures de données (Java)",
        },
        {
          en: "Back-end: object-oriented programming (advanced PHP)",
          fr: "Back-end : programmation orientée objet (PHP avancé)",
        },
        {
          en: "Relational modeling and SQL optimization (PostgreSQL)",
          fr: "Modélisation relationnelle et optimisation SQL (PostgreSQL)",
        },
        {
          en: "Containerization (Docker), Git and collaboration best practices",
          fr: "Conteneurisation (Docker), Git et bonnes pratiques de collaboration",
        },
        {
          en: "Project management: project audits, writing specifications and tenders",
          fr: "Gestion de projet : audit de projet, rédaction de cahier des charges et appels d'offre",
        },
        {
          en: "Web accessibility (RGAA) and agentic AI workflows (OpenCode, T3 Code)",
          fr: "Accessibilité web (RGAA) et workflows d'IA agentic (OpenCode, T3 Code)",
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
      name: "yank",
      slug: "yank",
      date: { en: "November 2026", fr: "Novembre 2026" },
      description: {
        en: "Desktop app built around yt-dlp: browse, watch and download YouTube videos or entire playlists. Made with Tauri, Rust and React, following an agentic coding approach.",
        fr: "Application desktop autour de yt-dlp : parcourir, regarder et télécharger des vidéos YouTube ou des playlists entières. Réalisée avec Tauri, Rust et React, en agentic coding.",
      },
      tags: ["React", "Rust", "Tauri", "Open source"],
    },
    {
      name: "spacejo",
      slug: "spacejo",
      date: { en: "November 2026", fr: "Novembre 2026" },
      description: {
        en: "Online card game inspired by Skyjo, made to play with my friends. A full web app (database, front-end) built with agentic coding as a school project.",
        fr: "Jeu de cartes en ligne inspiré du Skyjo, fait pour jouer entre amis. Application web complète (base de données, front-end) réalisée en agentic coding dans le cadre de l'école.",
      },
      tags: ["React", "Rust", "Open source"],
    },
    {
      name: "aarshi",
      slug: "aarshi",
      date: { en: "October 2026", fr: "Octobre 2026" },
      description: {
        en: "Rust CLI that generates a multilingual (i18n) Next.js site in one command: route tree, typed dictionaries, sitemap and language switcher generated automatically. Agentic coding approach.",
        fr: "CLI en Rust qui génère un site Next.js multilingue (i18n) en une commande : arbre de routes, dictionnaires typés, sitemap et sélecteur de langue générés automatiquement. Approche agentic coding.",
      },
      tags: ["Rust", "Open source"],
    },
    {
      name: "ouro(boros)",
      slug: "ouro",
      date: { en: "October 2026", fr: "Octobre 2026" },
      description: {
        en: "Personal website, rebuilt from scratch with Next.js and React, with special care for UI/UX design.",
        fr: "Site personnel, refait de zéro avec Next.js et React, avec une attention particulière au design UI/UX.",
      },
      tags: ["Next.js", "React"],
    },
  ],
};
