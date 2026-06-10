import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://tecsiz.co.jp',
    integrations: [
        react(),
        sitemap({
            filter: (page) => !page.includes('/privacy/'),
        }),
    ],
    output: 'static',
    build: {
        format: 'directory'
    }
});
