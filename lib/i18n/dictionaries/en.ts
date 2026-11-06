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
      "Daniel Fortuné (aaimeraud), full-stack developer apprentice in Paris. I make websites with Next.js, React & WordPress and keep learning every day.",
  },
  language: {
    label: "Change language",
    en: "English",
    fr: "Français",
  },
  profile: {
    portraitAlt: "A photo of",
    portraitTooltip: "Don't get too distracted now",
    nameTooltip: "But you can call me",
    description: "Looking for an apprenticeship in software development",
    jobTitle: "Full-Stack Developer Apprentice",
  },
  about: {
    highlight: "Constantly growing.",
    sectionTitle: "About",
    intro:
      "I make websites. I'm learning to make useful and meaningful software, and I'm trying to get better at it every day.",
    currently: "I'm currently a",
    role: "full-stack web developer apprentice in Paris,",
    jobTooltip: "at",
    company: "a Parisian communication agency",
    stack: "mostly working with WordPress and Next.js.",
    learning: "Also learning Python.",
    nowBefore: "Curious about what I'm up to right now? See my",
    nowLink: "/now page",
  },
  ai: {
    groupLabel: "AI related button group",
    resume: "My resume",
    resumeShort: "CV",
    askButton: "Ask an LLM about me",
    askShort: "LLM",
    askTooltipTitle: "Looking to hire ?",
    askTooltipBody: "Let AI tell you my strengths & weaknesses ^^",
    askClaude: "Ask Claude",
    askChatGpt: "Ask ChatGPT",
    copyPrompt: "Copy Prompt",
    copiedPrompt: "Copied!",
  },
  socials: {
    twitter: "I'll never call it X sorry",
    linkedin: "Ughh who likes this one ?",
    email: "Wanna hire ? ^^",
    github: "I'm getting shy... let me tidy up a bit",
  },
  projects: {
    title: "Projects",
    moreTooltip: "There's more on the way !",
    actions: {
      viewSite: "Visit the site",
      viewRepo: "See the repo",
      close: "Close",
    },
    kind: {
      [projectTypes.website]: "This one's a website",
      [projectTypes.design]: "This one's a design project",
      [projectTypes.cli]: "This one's a CLI tool",
      [projectTypes.game]: "This one's a game",
      [projectTypes.app]: "This one's a desktop application",
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
      [projectTags.agentic]: "Agentic Coding",
      [projectTags.tauri]: "Tauri",
      [projectTags.rust]: "Rust",
    },
    items: {
      yank: {
        description:
          "A yt-dlp frontend and youtube client to download and watch videos or entire playlists",
        tooltip:
          "I was looking for a way to download 15 videos of a course in one go so I paved my own",
      },
      spacejo: {
        description: "A Skyjo clone for my friends and I",
        tooltip:
          "I had to make a full web app with AI at school so I made this ! They were all so happy haha !",
      },
      ouro: {
        description: "This very website ^^",
        tooltip:
          "I've finally made this fourth redesign in almost a day after a long time of procrastination...",
      },
      aimerss: {
        description: "A selection of RSS feeds I like",
        tooltip: "One-shotted this one, I have to work on the UI I know lol...",
      },
      aarshi: {
        description:
          "A CLI that scaffolds a Next.js app and simplifies my developer experience",
        tooltip:
          "I paid for a month of OpenCode API access, so I had a bit of fun making this haha",
      },
    },
  },
  nowPage: {
    meta: {
      title: "Now · aaimeraud",
      description:
        "What Daniel Fortuné (aaimeraud) is doing right now: where he works, what he's learning and the projects he's building.",
    },
    title: "Now",
    subtitle: "What I'm up to at the moment",
    back: "Back home",
    lastUpdated: "Last updated",
    basedIn: "Based in",
    at: "at",
    since: "since",
    sections: {
      work: "Work",
      learning: "Learning",
      projects: "Building",
    },
    aboutBefore: "This is a now page, an idea from",
    aboutAfter: ". If you have a site, you should make one too.",
  },
  cvPage: {
    meta: {
      title: "Resume · aaimeraud",
      description:
        "Resume of Daniel Fortuné (aaimeraud), junior full-stack developer in Paris: skills, experience, education and projects.",
    },
    back: "Back home",
    download: "PDF",
    sections: {
      profile: "Profile",
      skills: "Technical skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
    },
  },
  footer: {
    nohelloBefore: "Please read this before contacting me:",
    nohelloAfter:
      ". I may not respond to your message, please don't take it personally.",
    commitLabel: "Last commit",
    commitTitle: "See the latest commit on main",
  },
};

export type Dictionary = typeof en;
