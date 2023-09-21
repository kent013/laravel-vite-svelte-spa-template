<script lang="ts">
  import { Link } from '@inertiajs/svelte'
  import type { Method } from '@inertiajs/core'

  export let href: string
  export let method: Method | undefined = 'get'
  export let as: keyof HTMLElementTagNameMap | undefined = 'button'
</script>

<Link
  {as}
  {method}
  {href}
  class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out">
  <slot />
</Link>
