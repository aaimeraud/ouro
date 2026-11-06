import { projectTags, projectTypes } from "@/lib/types/projects.types";
import type { Dictionary } from "./en";

/** French translation. Typed as `Dictionary`, so it must mirror en.ts exactly. */
export const fr: Dictionary = {
  meta: {
    title: "aaimeraud",
    description:
      "Daniel Fortuné (aaimeraud), alternant développeur full-stack à Paris. Je crée des sites avec Next.js, React et WordPress, et j'apprends chaque jour.",
  },
  language: {
    label: "Changer de langue",
    en: "English",
    fr: "Français",
  },
  profile: {
    portraitAlt: "Une photo de",
    portraitTooltip: "Ne te laisse pas trop distraire",
    nameTooltip: "Mais tu peux m'appeler",
    description: "En recherche d'une alternance en développement logiciel",
    jobTitle: "Alternant développeur full-stack",
  },
  about: {
    highlight: "En constante évolution.",
    sectionTitle: "À propos",
    intro:
      "Je fais des sites web. J'apprends à créer des logiciels utiles et qui ont du sens, et j'essaie de m'améliorer chaque jour.",
    currently: "Je suis actuellement",
    role: "alternant développeur web full-stack à Paris,",
    jobTooltip: "chez",
    company: "une agence de communication parisienne",
    stack: "je travaille surtout avec WordPress et Next.js.",
    learning: "J'apprends aussi Python.",
    nowBefore: "Curieux de savoir ce que je fais en ce moment ? Va voir ma",
    nowLink: "page /now",
  },
  ai: {
    groupLabel: "Boutons liés à l'IA",
    resume: "Mon CV",
    resumeShort: "CV",
    askButton: "Demande à un LLM à mon sujet",
    askShort: "LLM",
    askTooltipTitle: "Tu cherches à recruter ?",
    askTooltipBody: "Laisse l'IA te donner mes forces et faiblesses ^^",
    askClaude: "Demander à Claude",
    askChatGpt: "Demander à ChatGPT",
    copyPrompt: "Copier le prompt",
    copiedPrompt: "Copié !",
  },
  socials: {
    twitter: "Je ne l'appellerais jamais X désolé",
    linkedin: "Euh, qui aime ce truc ?",
    email: "Tu veux m'embaucher ? ^^",
    github: "Je suis timide... laisse-moi ranger un peu",
  },
  projects: {
    title: "Projets",
    moreTooltip: "Il y en a d'autres en route !",
    actions: {
      viewSite: "Voir le site",
      viewRepo: "Voir le repo GitHub",
      close: "Fermer",
    },
    kind: {
      [projectTypes.website]: "Un site web",
      [projectTypes.design]: "Un projet de design",
      [projectTypes.cli]: "Un outil en ligne de commandes",
      [projectTypes.game]: "Un jeu",
      [projectTypes.app]: "Une application",
    },
    tags: {
      [projectTags.uiUx]: "Design UI/UX",
      [projectTags.next]: "Next.js",
      [projectTags.react]: "React",
      [projectTags.php]: "PHP",
      [projectTags.content]: "Gestion de contenu",
      [projectTags.openSource]: "Open-Source",
      [projectTags.contribution]: "Contribution",
      [projectTags.wip]: "En cours",
      [projectTags.agentic]: "Coding Agentique",
      [projectTags.rust]: "Rust",
      [projectTags.tauri]: "Tauri",
    },
    items: {
      yank: {
        description:
          "Un frontend pour yt-dlp et un client youtube pour regarder ou télécharger des videos youtube ou des playlists entières",
        tooltip:
          "Je cherchais une façon de télécharger 15 videos d'un cours en ligne d'un coup alors j'ai fait ça",
      },
      spacejo: {
        description: "Un Skyjo en ligne pour mes amis",
        tooltip:
          "Je devais faire un site complet (db, frontend...) avec des agents IA.",
      },
      ouro: {
        description: "Ce site, tout simplement ^^",
        tooltip:
          "J'ai enfin fait ce quatrième redesign en presque une journée, après une longue période de procrastination...",
      },
      aimerss: {
        description: "Une sélection de flux RSS que j'aime",
        tooltip:
          "Celui-ci je l'ai fait en une soirée d'illumination, il faut que je travaille l'UI et j'ai plein d'idées de fonctionnalités à ajouter",
      },
      aarshi: {
        description:
          "Une CLI qui génère le squelette d'une app Next.js et simplifie mon expérience développeur",
        tooltip:
          "J'ai payé un mois d'API OpenCode, donc je me suis fait plaisir en la créant haha",
      },
    },
  },
  nowPage: {
    meta: {
      title: "Now · aaimeraud",
      description:
        "Ce que fait Daniel Fortuné (aaimeraud) en ce moment : où il travaille, ce qu'il apprend et les projets sur lesquels il bosse.",
    },
    title: "Now",
    subtitle: "Ce que je fais en ce moment",
    back: "Retour à l'accueil",
    lastUpdated: "Mis à jour le",
    basedIn: "Basé à",
    at: "chez",
    since: "depuis",
    sections: {
      work: "Travail",
      learning: "Apprentissage",
      projects: "Projets en cours",
    },
    aboutBefore: "Ceci est une page now, une idée de",
    aboutAfter: ". Si tu as un site, tu devrais en faire une aussi.",
  },
  cvPage: {
    meta: {
      title: "CV · aaimeraud",
      description:
        "CV de Daniel Fortuné (aaimeraud), développeur full-stack junior à Paris : compétences, expérience, formation et projets.",
    },
    back: "Retour à l'accueil",
    download: "PDF",
    sections: {
      profile: "Profil",
      skills: "Compétences techniques",
      experience: "Expérience",
      education: "Formation",
      projects: "Projets",
    },
  },
  footer: {
    nohelloBefore: "S'il vous plaît lisez ceci avant de me contacter :",
    nohelloAfter:
      ". Je ne répondrai peut-être pas à ton message, ne le prends pas personnellement.",
    commitLabel: "Dernier commit",
    commitTitle: "Voir le dernier commit sur main",
  },
};
