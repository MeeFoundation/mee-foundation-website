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
      target: '_blank',
      id: 'privacy-policy',
    },
    {
      link: 'https://docs.mee.foundation',
      name: 'Docs',
      target: '_blank',
      id: 'docs',
    },
    {
      link: '/downloads',
      name: 'Downloads',
      // target: '_blank',
      id: 'downloads',
    },
  ],
};
export const footer = {
  links: [
    {
      name: 'Business',
      link: '/for-providers',
      id: 'business',
    },
    {
      link: 'https://docs.mee.foundation',
      name: 'Developers',
      target: '_blank',
      id: 'docs',
    },
    {
      link: '/downloads',
      name: 'Downloads',
      id: 'downloads',
    },
    {
      name: 'About us',
      link: '/about',
      id: 'about',
    },
  ],
  rightLinks: [
    {
      link: '/privacy-policy',
      name: 'Privacy Policy',
      target: '_blank',
      id: 'privacy-policy',
    },
    {
      link: 'https://x.com/mee_foundation',
      icon: 'twitter-x',
      target: '_blank',
      id: 'twitter',
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
        },
      },
    },
  },
  scopedStyleStrategy: 'class',
});
