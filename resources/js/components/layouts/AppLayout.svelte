<script lang="ts">
  import { Link } from '@inertiajs/svelte'
</script>

<main>
  <header>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link>
  </header>
  <article>
    <slot />
  </article>
</main>
