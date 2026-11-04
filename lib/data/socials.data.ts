import { Dictionary } from "../i18n/dictionaries/en";
import { Link, LinkType } from "../types/links.types";

/** Social labels double as keys of `socials` in the i18n dictionaries */
type SocialLink = Link & {
  label: keyof Dictionary["socials"];
  /** Text shown on the link */
  name: string;
};

export const socials: SocialLink[] = [
  {
    label: "twitter",
    name: "Twitter",
    type: LinkType.external,
    url: "https://x.com/mlvr004/",
  },
  {
    label: "linkedin",
    name: "LinkedIn",
    type: LinkType.external,
    url: "https://www.linkedin.com/in/danielfortun%C3%A9/",
  },
  {
    label: "email",
    name: "Email",
    type: LinkType.email,
    url: "danielfortune.pro@proton.me?subject=Hi Daniel ! I saw your website",
  },
  {
    label: "github",
    name: "GitHub",
    type: LinkType.external,
    url: "https://github.com/aaimeraud",
  },
];
