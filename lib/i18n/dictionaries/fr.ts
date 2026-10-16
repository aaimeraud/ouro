import { projectTags, projectTypes } from "@/lib/types/projects.types";
import type { Dictionary } from "./en";

/** French translation. Typed as `Dictionary`, so it must mirror en.ts exactly. */
export const fr: Dictionary = {
  meta: {
    title: "aaimeraud",
    description:
      "Je fais des sites web, j'apprends à créer des logiciels et je progresse chaque jour.",
  },
  language: {
    label: "Changer de langue",
    en: "English",
    fr: "Français",
  },
  profile: {
    portraitAlt: "Une photo de",
    portraitTooltip: "ne te laisse pas trop distraire",
    nameTooltip: "mais tu peux m'appeler",
    description: "en recherche d'une alternance en développement logiciel",
  },
  about: {
    highlight: "en constante évolution.",
    intro:
      "je fais des sites web. j'apprends à créer des logiciels utiles et qui ont du sens, et j'essaie de m'améliorer chaque jour.",
    currently: "je suis actuellement",
    role: "alternant développeur full-stack à Paris,",
    jobTooltip: "chez",
    stack: "je travaille surtout avec WordPress et Next.js.",
    learning: "j'apprends aussi python.",
  },
  ai: {
    groupLabel: "Boutons liés à l'IA",
    resume: "Mon CV",
    askButton: "Demander à une IA qui je suis",
    askTooltipTitle: "Tu cherches à recruter ?",
    askTooltipBody: "Laisse une IA te donner mes forces et mes faiblesses ^^",
    askClaude: "Demander à Claude",
    askChatGpt: "Demander à ChatGPT",
    copyPrompt: "Copier le prompt",
    copiedPrompt: "Copié !",
  },
  socials: {
    bluesky: "Je me suis inscrit récemment (je ne sais pas trop pourquoi)",
    linkedin: "euh, qui aime ce truc ?",
    email: "tu veux m'embaucher ? ^^",
    github: "je suis timide... laisse-moi ranger un peu",
  },
  projects: {
    title: "Projets",
    moreTooltip: "il y en a d'autres en route !",
    kind: {
      [projectTypes.website]: "celui-ci est un site web",
      [projectTypes.design]: "celui-ci est un projet de design",
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
    },
    items: {
      toolbox: {
        description: "Une collection gratuite d'outils pour le dev et le design",
        tooltip: "commencé en octobre, laisse-moi quelques semaines ^^",
      },
      ouro: {
        description: "Ce site, tout simplement ^^",
        tooltip:
          "J'ai enfin fait ce quatrième redesign en presque une journée, après une longue période de procrastination...",
      },
      aimerss: {
        description: "Une sélection de flux RSS que j'aime",
        tooltip:
          "celui-ci est passé d'un coup, il faut que je travaille l'UI je sais lol...",
      },
    },
  },
  footer: {
    nohelloBefore: "Lis ceci avant de me contacter :",
    nohelloAfter:
      ". Je ne réponds peut-être pas à ton message, ne le prends pas personnellement.",
  },
};
