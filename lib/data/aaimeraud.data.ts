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
    tags: [tag.react, tag.uiUx, tag.openSource, tag.wip],
    link: createLink({
      url: "https://github.com/aaimeraud/t5x",
      label: "Toolbox",
      type: LinkType.external,
    }),
    year: "2026",
  }),
  createProject({
    slug: "ouro",
    name: "ouro(boros)",
    type: type.website,
    tags: [tag.next, tag.react, tag.uiUx],
    link: createLink({
      url: "https://github.com/aaimeraud/ouro",
      label: "aaimeraud",
      type: LinkType.internal,
    }),
    year: "2026",
  }),
  createProject({
    slug: "aimerss",
    name: "AimeRSS",
    type: type.website,
    tags: [tag.next, tag.react],
    link: createLink({
      url: "https://github.com/aaimeraud/feed.com",
      label: "AimeRSS",
      type: LinkType.external,
    }),
    year: "2026",
  }),
];

const socials = [
  createLink({
    label: "bluesky",
    type: LinkType.external,
    url: "https://bsky.app/profile/aaimeraud.bsky.social",
  }),
  createLink({
    label: "linkedin",
    type: LinkType.external,
    url: "https://www.linkedin.com/in/danielfortun%C3%A9/",
  }),
  createLink({
    label: "email",
    type: LinkType.email,
    url: "danielfortune.pro@proton.me?subject=Hi Daniel ! I saw your website",
  }),
  createLink({
    label: "github",
    type: LinkType.external,
    url: "https://github.com/aaimeraud",
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
    role: "Frontend developer",
    resumeUrl: "/public/pdf/daniel_fortune_[public].pdf",
    status: {
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
