import { createLink, Link, LinkType } from "lib/types/links.types";

import {
  createProject,
  Project,
  projectTags as tag,
  projectTypes as type,
} from "../types/projects.types";

const projects: Project[] = [
  createProject({
    slug: "toolbox",
    name: "t5x (toolbox)",
    type: type.website,
    description: "A free collection of dev & design tools",
    tags: [tag.react, tag.uiUx, tag.openSource, tag.wip],
    link: createLink({
      url: "https://github.com/aaimeraud/t5x",
      label: "Toolbox",
      type: LinkType.external,
    }),
    year: "2026",
    tooltipLabel: "started this in october, give me a few weeks ^^",
  }),
  createProject({
    slug: "ouro",
    name: "ouro(boros)",
    type: type.website,
    description: "This very website ^^",
    tags: [tag.next, tag.react, tag.uiUx, tag.wip],
    link: createLink({
      url: "https://fortunedaniel.com/",
      label: "aaimeraud",
      type: LinkType.internal,
    }),
    year: "2026",
    tooltipLabel:
      "I've finally made this fourth redesign in almost a day after a long time of procrastination...",
  }),
  createProject({
    slug: "aimerss",
    name: "AimeRSS",
    type: type.website,
    description: "A selection of rss feeds i like",
    tags: [tag.next, tag.react],
    link: createLink({
      url: "https://feed.fortunedaniel.com/",
      label: "AimeRSS",
      type: LinkType.external,
    }),
    year: "2026",
    tooltipLabel:
      "one shotted this one, i have to work on the ui i know lol...",
  }),
];

const socials = [
  createLink({
    label: "bluesky",
    type: LinkType.external,
    url: "https://bsky.app/profile/aaimeraud.bsky.social",
    tooltipLabel: "Recently got on there (idk why tbh)",
  }),
  createLink({
    label: "linkedin",
    type: LinkType.external,
    url: "https://www.linkedin.com/in/danielfortun%C3%A9/",
    tooltipLabel: "ughh who likes this one ?",
  }),
  createLink({
    label: "email",
    type: LinkType.email,
    url: "danielfortune.pro@proton.me?subject=Hi Daniel ! I saw your website",
    tooltipLabel: "wanna hire ? ^^",
  }),
  createLink({
    label: "github",
    type: LinkType.external,
    url: "https://github.com/aaimeraud",
    tooltipLabel: "i'm getting shy... let me tidy up a bit",
  }),
];

/** Informations related to me */
class Aimeraud {
  /** A list of my projects */
  public projects: Project[] = projects;
  /** Links to my socials */
  public socials: Link[] = socials;

  public profile = {
    portrait: "/images/portrait.jpg",
    username: "aaimeraud",
    fname: "Daniel",
    lname: "Fortuné",
    description: "looking for an apprenticeship in software development",
    role: "Frontend developer",
    resumeUrl: "/public/pdf/daniel_fortune_[public].pdf",
    status: {
      job: {
        message: "Work-Study @ ComKani",
        link: createLink({
          label: "ComKani",
          url: "https://comkani.fr",
          type: LinkType.external,
        }),
      },
      studies: {
        level: "Bachelor 3",
        link: createLink({
          label: ".decode",
          url: "https://ecole-decode.fr",
          type: LinkType.external,
        }),
      },
    },
  };
}

export const aaimeraud = new Aimeraud();
