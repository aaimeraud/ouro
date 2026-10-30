import { createLink, LinkType } from "lib/types/links.types";

import { projects } from "./projects.data";
import { socials } from "./socials.data";

/** Informations related to me */
export const aaimeraud = {
  projects,
  socials,
  profile: {
    portrait: "/images/portrait.png",
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
