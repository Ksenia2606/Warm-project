import { resolve } from "node:path";
import { defineConfig } from 'vite'
import htmlInclude from 'vite-plugin-html-include';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            },
        },
    },
    plugins: [
        htmlInclude()
    ],
    server: {
        host: true
    },
});