export enum LinkType {
  external = "external",
  email = "email",
  internal = "internal",
}

export type Link = {
  label: string;
  type: LinkType;
  url: string;
};

export const createLink = (data: Link): Link => {
  return { ...data };
};
