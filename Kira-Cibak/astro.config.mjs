// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
// Update `site` with your production domain to unlock correct canonical URLs and sitemap links.
export default defineConfig({
	site: 'https://your-domain.com',
	integrations: [preact()]
});
