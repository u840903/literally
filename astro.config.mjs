// @ts-check
import {fileURLToPath, URL} from "url";
import {defineConfig} from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    adapter: vercel(),
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: [
                {find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
            ],
        }
    }
});