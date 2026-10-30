import { SITE_URL } from "../site";
import { createLink, LinkType } from "../types/links.types";
import {
  createProject,
  Project,
  projectTags as tag,
  projectTypes as type,
} from "../types/projects.types";

export const projects: Project[] = [
  // createProject({
  //   slug: "toolbox",
  //   name: "t5x (toolbox)",
  //   type: type.website,
  //   tags: [tag.react, tag.uiUx, tag.openSource, tag.wip],
  //   repo: createLink({
  //     url: "https://github.com/aaimeraud/t5x",
  //     label: "Toolbox",
  //     type: LinkType.external,
  //   }),
  //   year: "2026",
  // }),
  createProject({
    slug: "aarshi",
    name: "aarshi",
    type: type.cli,
    tags: [tag.openSource, tag.rust, tag.agentic],
    website: createLink({
      url: "https://aarshi.aaimeraud.me",
      label: "aarshi docs",
      type: LinkType.external,
    }),
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
    name: "aimerss",
    type: type.website,
    tags: [tag.next, tag.react],
    website: createLink({
      url: "https://feed.fortunedaniel.com",
      label: "feed.com",
      type: LinkType.external,
    }),
    repo: createLink({
      url: "https://github.com/aaimeraud/feed.com",
      label: "aimerss",
      type: LinkType.external,
    }),
    year: "2026",
  }),
];
