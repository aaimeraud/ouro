import { projectTags, projectTypes } from "@/lib/types/projects.types";

/**
 * Source dictionary (default locale). Every other dictionary is typed as
 * `Dictionary`, so TypeScript reports any key missing from a translation.
 * Project and social keys mirror the slugs/labels used in lib/data.
 */
export const en = {
  meta: {
    title: "aaimeraud",
    description:
      "I make websites, i'm learning to make software and try getting better at it every day.",
  },
  language: {
    label: "Change language",
    en: "english",
    fr: "français",
  },
  profile: {
    portraitAlt: "A photo of",
    portraitTooltip: "don't get too distracted now",
    nameTooltip: "but you can call me",
    description: "looking for an apprenticeship in software development",
  },
  about: {
    highlight: "constantly growing.",
    intro:
      "i make websites. i'm learning to make useful and meaningful software, and i'm trying to get better at it every day.",
    currently: "i'm currently a",
    role: "full-stack developer apprentice in Paris,",
    jobTooltip: "at",
    stack: "mostly working with WordPress and Next.js.",
    learning: "also learning python.",
  },
  ai: {
    groupLabel: "AI related button group",
    resume: "my resume",
    resumeShort: "CV",
    askButton: "ask AI about me",
    askShort: "AI",
    askTooltipTitle: "Looking to hire ?",
    askTooltipBody: "Let AI tell you my strengths & weaknesses ^^",
    askClaude: "Ask Claude",
    askChatGpt: "Ask ChatGPT",
    copyPrompt: "Copy Prompt",
    copiedPrompt: "Copied!",
  },
  socials: {
    bluesky: "Recently got on there (idk why tbh)",
    linkedin: "ughh who likes this one ?",
    email: "wanna hire ? ^^",
    github: "i'm getting shy... let me tidy up a bit",
  },
  projects: {
    title: "projects",
    moreTooltip: "there's more on the way !",
    kind: {
      [projectTypes.website]: "this one's a website",
      [projectTypes.design]: "this one's a design project",
    },
    tags: {
      [projectTags.uiUx]: "UI/UX Design",
      [projectTags.next]: "Next.js",
      [projectTags.react]: "React",
      [projectTags.php]: "PHP",
      [projectTags.content]: "Content Management",
      [projectTags.openSource]: "Open-Source",
      [projectTags.contribution]: "Contribution",
      [projectTags.wip]: "Work in Progress",
    },
    items: {
      toolbox: {
        description: "A free collection of dev & design tools",
        tooltip: "started this in october, give me a few weeks ^^",
      },
      ouro: {
        description: "This very website ^^",
        tooltip:
          "I've finally made this fourth redesign in almost a day after a long time of procrastination...",
      },
      aimerss: {
        description: "A selection of RSS feeds i like",
        tooltip: "one-shotted this one, i have to work on the UI i know lol...",
      },
    },
  },
  footer: {
    nohelloBefore: "Read this before contacting me:",
    nohelloAfter:
      ". I may not respond to your message, please don't take it personally.",
  },
};

export type Dictionary = typeof en;
