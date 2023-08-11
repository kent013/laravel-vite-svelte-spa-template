import { defineConfig } from "vite";

import laravel from 'laravel-vite-plugin'
import { svelte } from "@sveltejs/vite-plugin-svelte";

import * as fs from 'fs'


export default defineConfig({
    server: {
        https: {
            key: fs.readFileSync('nginx/certs/server.key'),
            cert: fs.readFileSync('nginx/certs/server.pem'),
        },
        hmr: {
            host: 'localhost',
        }
    },
    plugins: [
        laravel([
            'resources/css/app.css',
            'resources/js/main.ts'
        ]),
        svelte()
    ],
});
