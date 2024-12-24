import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
export const discord = "https://discord.gg/PB8qxrQXup";
export const header = {
  links: [
    {
      name: 'Projects',
      link: '/projects',
      id: 'projects',
    },
    {
      name: 'Businesses',
      link: '/businesses',
      id: 'businesses',
    },
    {
      name: 'About us',
      link: '/about',
      id: 'about',
    },
  ],
  rightLinks: [
    {
      name: 'Join us',
      link: discord,
      icon: 'discord',
      target: '_blank',
      id: 'discord',
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
    },
    {
      link: discord,
      icon: 'discord',
      target: '_blank',
      id: 'discord',
    },
  ],
  rightLinks: [
    {
      name: 'Projects',
      link: '/projects',
      id: 'projects',
    },
    {
      name: 'Businesses',
      link: '/businesses',
      id: 'businesses',
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
  redirects: {'/products': '/projects'},
  integrations: [tailwind(), react(), mdx()],
  build: {
    assets: 'assets',
  },
  output: 'static',
  scopedStyleStrategy: 'class',
});
