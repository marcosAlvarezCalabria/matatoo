import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://lamamadelamamatattoo.netlify.app',
  build: {
    assets: 'assets',
    inlineStylesheets: 'always',
  },
});

