// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sepamir1992.github.io',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
