// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio fictício: projeto conceitual, sem site publicado.
export default defineConfig({
  site: 'https://razaocontabilidade.example',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
