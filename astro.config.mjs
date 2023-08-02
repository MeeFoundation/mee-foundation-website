import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://mee.foundation',
  integrations: [tailwind(), react()],
  build: {
    assets: 'assets'
  },
  experimental: {
    assets: true
   },  
  output: 'static',
  scopedStyleStrategy: 'class'
});