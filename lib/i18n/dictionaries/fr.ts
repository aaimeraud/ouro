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
    en: "english",
    fr: "français",
  },
  profile: {
    portraitAlt: "Une photo de",
    portraitTooltip: "ne te laisse pas trop distraire",
    nameTooltip: "mais tu peux m'appeler",
    description: "en recherche d'une alternance en développement logiciel",
    jobTitle: "Alternant développeur full-stack",
  },
  about: {
    highlight: "en constante évolution.",
    sectionTitle: "À propos",
    intro:
      "je fais des sites web. j'apprends à créer des logiciels utiles et qui ont du sens, et j'essaie de m'améliorer chaque jour.",
    currently: "je suis actuellement",
    role: "alternant développeur web full-stack à Paris,",
    jobTooltip: "chez",
    company: "une agence de communication parisienne",
    stack: "je travaille surtout avec WordPress et Next.js.",
    learning: "j'apprends aussi python.",
  },
  ai: {
    groupLabel: "Boutons liés à l'IA",
    resume: "mon cv",
    resumeShort: "cv",
    askButton: "hi-robot",
    askShort: "demandez à un llm",
    askTooltipTitle: "Tu cherches à recruter ?",
    askTooltipBody: "Laisse l'IA te donner mes forces et faiblesses ^^",
    askClaude: "Demander à Claude",
    askChatGpt: "Demander à ChatGPT",
    copyPrompt: "Copier le prompt",
    copiedPrompt: "Copié !",
  },
  socials: {
    bluesky: "Je me suis inscrit récemment",
    linkedin: "euh, qui aime ce truc ?",
    email: "tu veux m'embaucher ? ^^",
    github: "je suis timide... laisse-moi ranger un peu",
  },
  projects: {
    title: "projets",
    moreTooltip: "il y en a d'autres en route !",
    actions: {
      viewSite: "voir le site",
      viewRepo: "voir le repo github",
      close: "fermer",
    },
    kind: {
      [projectTypes.website]: "un site web",
      [projectTypes.design]: "un projet de design",
      [projectTypes.cli]: "un projet en ligne de commandes",
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
    },
    items: {
      toolbox: {
        description:
          "Une collection gratuite d'outils pour le dev et le design",
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
      aarshi: {
        description:
          "Une CLI qui génère le squelette d'une app Next.js et simplifie mon expérience développeur",
        tooltip:
          "J'ai payé un mois d'API OpenCode, donc je me suis fait plaisir en la créant haha",
      },
    },
  },
  footer: {
    nohelloBefore: "Lisez ceci avant de me contacter :",
    nohelloAfter:
      ". Je ne répondrai peut-être pas à ton message, ne le prends pas personnellement.",
  },
};
