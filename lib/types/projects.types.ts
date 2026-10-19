import { Link } from "./links.types";

export enum projectTypes {
  website = "website",
  cli = "command line",
  design = "design",
}

export enum projectTags {
  uiUx = "UI/UX Design",
  next = "Next.js",
  react = "React",
  rust = "Rust",
  php = "PHP",
  content = "Content Management",
  openSource = "Open-Source",
  contribution = "Contribution",
  wip = "Work in Progress",
  agentic = "Agentic Coding",
}

/** Matches the keys of `projects.items` in the i18n dictionaries */
export type ProjectSlug = "toolbox" | "ouro" | "aimerss" | "aarshi";

export interface Project {
  slug: ProjectSlug;
  /** The project's name */
  name: string;
  /** The type of this project */
  type: projectTypes;
  /** Project tags */
  tags: projectTags[];
  year: string;
  /** The project's live site, when it has one */
  website?: Link;
  /** The project's source repository */
  repo?: Link;
  /** A preview image for this project */
  previewImage?: string;
  /** A collection of images from this project */
  gallery?: string[];
}

export const createProject = (data: Project): Project => {
  return { ...data };
};
