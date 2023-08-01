import type { Site, SocialObjects } from "./types";

export const svcUrl: string | undefined = import.meta.env.PUBLIC_SVC_URL as | string | undefined;

export const postsPerPage = 3;

export const SITE: Site = {
  website: "https://mee.foundation/",
  author: "Mee Foundation",
  desc: "Mee Foundation",
  title: "Mee",
  ogImage: "mee-logo.svg",
  lightAndDarkMode: true
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/MeeFoundation",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "paul@mee.foundation",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];
