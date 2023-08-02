import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://mee.foundation',
  integrations: [tailwind(), react(), mdx()],
  build: {
    assets: 'assets'
  },
  experimental: {
    assets: true
  },
  output: 'static',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name][extname]'
        }
      }
    }
  },
  scopedStyleStrategy: 'class'
});