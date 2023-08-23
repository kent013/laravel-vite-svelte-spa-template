import { defineConfig } from 'vite'

import * as path from 'path'
import laravel from 'laravel-vite-plugin'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import typescript from '@rollup/plugin-typescript'
import sveltePreprocess from 'svelte-preprocess'

import * as fs from 'fs'

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync('nginx/certs/server.key'),
      cert: fs.readFileSync('nginx/certs/server.pem'),
    },
    hmr: {
      host: 'localhost',
    },
  },
  plugins: [
    laravel(['resources/css/app.css', 'resources/js/app.ts']),
    svelte({
      preprocess: sveltePreprocess(),
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
  ],
  resolve: {
    alias: {
      '~/': `${__dirname}/resources/js/`,
    },
  },
})
