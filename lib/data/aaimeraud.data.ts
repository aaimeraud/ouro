import { createLink, Link, LinkType } from "lib/types/links.types";

import {
  createProject,
  Project,
  projectTags as tag,
  projectTypes as type,
} from "../types/projects.types";

const projects: Project[] = [
  createProject({
    slug: "aimerss",
    name: "AimeRSS",
    type: type.website,
    description: "A selection of rss feeds i like",
    tags: [tag.next, tag.react],
    link: "https://feed.fortunedaniel.com/",
    year: "2026",
  }),
];

const socials = [
  createLink({
    label: "bluesky",
    type: LinkType.external,
    url: "https://bsky.app/profile/aaimeraud.me",
  }),
  createLink({
    label: "linkedin",
    type: LinkType.external,
    url: "https://www.linkedin.com/in/danielfortun%C3%A9/",
  }),
  createLink({
    label: "email",
    type: LinkType.email,
    url: "danielfortune.pro@proton.com",
  }),
  createLink({
    label: "github",
    type: LinkType.external,
    url: "https://github.com/aaimeraud",
  }),
];

/** Informations related to me */
class Aimeraud {
  /** Links to my socials */
  public socials: Link[] = socials;

  /** A list of my projects */
  public projects: Project[] = projects;

  public profile = {
    portrait: "LINK TO IMAGE",
    username: "aaimeraud",
    legalName: "Daniel Fortuné",
    role: "Frontend Developper",
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
        school: ".decode",
      },
    },
  };
}

export const aaimeraud = new Aimeraud();
