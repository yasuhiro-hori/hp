import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://tecsiz.co.jp',
    integrations: [react()],
    output: 'static',
    build: {
        format: 'file'
    }
});
