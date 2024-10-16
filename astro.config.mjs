import {defineConfig} from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

export const discord =
  'https://discord.com/channels/1275848491964436491/1275848492413223025';
export const header = {
  links: [
    {
      name: 'Products',
      link: '/products',
      id: 'products',
    },
    {
      name: 'Business',
      link: '/for-providers',
      id: 'business',
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
      name: 'Products',
      link: '/products',
      id: 'products',
    },
    {
      name: 'Business',
      link: '/for-providers',
      id: 'business',
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
  ],
};

// https://astro.build/config
export default defineConfig({
  site: 'https://mee.foundation',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [tailwind(), react(), mdx()],
  build: {
    assets: 'assets',
  },
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]',
        }
      },
    },
  },
  scopedStyleStrategy: 'class',
});
