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
            serialize: (item) => {
                if (item.url === 'https://tecsiz.co.jp/') {
                    return { ...item, changefreq: 'weekly', priority: 1.0 };
                }
                if (item.url.includes('/blog/')) {
                    return { ...item, changefreq: 'monthly', priority: 0.7 };
                }
                return { ...item, changefreq: 'monthly', priority: 0.8 };
            },
        }),
    ],
    output: 'static',
    build: {
        format: 'directory'
    }
});
