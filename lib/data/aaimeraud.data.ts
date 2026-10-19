import { SITE_URL } from "lib/site";
import { createLink, Link, LinkType } from "lib/types/links.types";

import type { Dictionary } from "../i18n/dictionaries/en";
import {
  createProject,
  Project,
  projectTags as tag,
  projectTypes as type,
} from "../types/projects.types";

/** Social labels double as keys of `socials` in the i18n dictionaries */
type SocialLink = Link & { label: keyof Dictionary["socials"] };

const projects: Project[] = [
  createProject({
    slug: "toolbox",
    name: "t5x (toolbox)",
    type: type.website,
    tags: [tag.react, tag.uiUx, tag.openSource, tag.wip],
    repo: createLink({
      url: "https://github.com/aaimeraud/t5x",
      label: "Toolbox",
      type: LinkType.external,
    }),
    year: "2026",
  }),
  createProject({
    slug: "aarshi",
    name: "aarshi",
    type: type.cli,
    tags: [tag.openSource, tag.rust, tag.agentic],
    repo: createLink({
      url: "https://github.com/aaimeraud/aarshi",
      label: "aarshi",
      type: LinkType.external,
    }),
    year: "2026",
  }),
  createProject({
    slug: "ouro",
    name: "ouro(boros)",
    type: type.website,
    tags: [tag.next, tag.react, tag.uiUx],
    website: createLink({
      url: SITE_URL,
      label: "aaimeraud.me",
      type: LinkType.external,
    }),
    repo: createLink({
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
    website: createLink({
      url: "https://feed.fortunedaniel.com",
      label: "feed.com",
      type: LinkType.external,
    }),
    repo: createLink({
      url: "https://github.com/aaimeraud/feed.com",
      label: "AimeRSS",
      type: LinkType.external,
    }),
    year: "2026",
  }),
];

const socials: SocialLink[] = [
  {
    label: "bluesky",
    type: LinkType.external,
    url: "https://bsky.app/profile/aaimeraud.bsky.social",
  },
  {
    label: "linkedin",
    type: LinkType.external,
    url: "https://www.linkedin.com/in/danielfortun%C3%A9/",
  },
  {
    label: "email",
    type: LinkType.email,
    url: "danielfortune.pro@proton.me?subject=Hi Daniel ! I saw your website",
  },
  {
    label: "github",
    type: LinkType.external,
    url: "https://github.com/aaimeraud",
  },
];

/** Informations related to me */
export const aaimeraud = {
  /** A list of my projects */
  projects,
  /** Links to my socials */
  socials,
  profile: {
    portrait: "/images/portrait.jpg",
    username: "aaimeraud",
    fname: "Daniel",
    lname: "Fortuné",
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
  },
};
