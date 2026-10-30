import { Dictionary } from "../i18n/dictionaries/en";
import { Link, LinkType } from "../types/links.types";

/** Social labels double as keys of `socials` in the i18n dictionaries */
type SocialLink = Link & { label: keyof Dictionary["socials"] };

export const socials: SocialLink[] = [
  {
    label: "twitter",
    type: LinkType.external,
    url: "https://x.com/mlvr004/",
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
