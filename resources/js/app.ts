import { createInertiaApp } from '@inertiajs/svelte'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
  resolve: (name) =>
    // @ts-ignore for reason inertia-svelte-typescript is not ready yet
    resolvePageComponent(`./components/pages/${name}Page.svelte`, import.meta.glob('./components/pages/**/*.svelte')),

  setup({ el, App, props }) {
    new App({ target: el, props })
  },
})
