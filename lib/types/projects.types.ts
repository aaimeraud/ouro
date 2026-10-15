import { Link } from "./links.types";

export enum projectTypes {
  website = "website",
  design = "design",
}

export enum projectTags {
  uiUx = "UI/UX Design",
  next = "Next.js",
  react = "React",
  php = "PHP",
  content = "Content Management",
  openSource = "Open-Source",
  contribution = "Contribution",
  wip = "Work in Progress",
}

export interface Project {
  slug: string;
  /** The project's name */
  name: string;
  /** The type of this project */
  type: projectTypes;
  /** A simple description of this project */
  description: string;
  /** Project tags */
  tags: projectTags[];
  year: string;
  /** A link to this project */
  link?: string;
  /** A preview image for this project */
  previewImage?: string;
  /** A collection of images from this project */
  gallery?: string[];
  tooltipLabel?: string;
}

export const createProject = (data: Project): Project => {
  return { ...data };
};
