import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export const discord = 'https://discord.gg/PB8qxrQXup';
export const githubLink = 'https://github.com/meefoundation';

export const header = {
  links: [
    {
      name: 'Mee for you',
      link: '/mee-for-you',
      id: 'mee-for-you',
    },
    {
      name: 'About us',
      link: '/about',
      id: 'about',
    },
  ],
  rightLinks: [
    {
      name: 'Star us',
      link: githubLink,
      icon: 'github',
      target: '_blank',
      id: 'github',
      ariaLabel: 'GitHub',
    },
    {
      name: 'Join us',
      link: discord,
      icon: 'discord',
      target: '_blank',
      id: 'discord',
      ariaLabel: 'Discord',
    },
  ],
  footerLinks: [
    {
      link: '/privacy-policy',
      name: 'Privacy',
      id: 'privacy-policy',
    },
    {
      link: '/blog',
      name: 'Blog',
      id: 'blog',
    },
  ],
};
export const footer = {
  links: [
    {
      link: 'https://x.com/mee_foundation',
      icon: 'twitter-x',
      target: '_blank',
      id: 'twitter',
      ariaLabel: 'X',
    },
    {
      link: discord,
      icon: 'discord',
      target: '_blank',
      id: 'discord',
      ariaLabel: 'Discord',
    },
    {
      link: githubLink,
      icon: 'github',
      target: '_blank',
      id: 'github',
      ariaLabel: 'GitHub',
    },
  ],
  rightLinks: [
    {
      name: 'Mee for you',
      link: '/mee-for-you',
      id: 'mee-for-you',
    },
    {
      name: 'About us',
      link: '/about',
      id: 'about',
    },
    {
      link: '/privacy-policy',
      name: 'Privacy',
      id: 'privacy-policy',
    },
    {
      link: '/blog',
      name: 'Blog',
      id: 'blog',
    },
  ],
};

// https://astro.build/config
export default defineConfig({
  site: 'https://mee.foundation',
  redirects: {'/projects': '/products'},
  integrations: [tailwind(), react(), mdx()],
  build: {
    assets: 'assets',
  },
  output: 'static',
  scopedStyleStrategy: 'class',
});
