<script lang="ts">
  import { Link } from '@inertiajs/svelte'
</script>

<main>
  <div class="flex h-screen w-full flex-col bg-white font-mono">
    <header class="flex items-center justify-between border-b py-4 px-4">
      <!-- logo - start -->
      <a class="inline-flex items-center self-center" href="/" aria-label="logo">
        <span class="text-black-800 whitespace-nowrap font-mono font-bold text-3xl tracking-wider">GPT Editor</span>
      </a>
      <!-- logo - end -->
    </header>

    <div class="flex h-full w-full overflow-hidden font-sans">
      <slot />
    </div>

    <footer
      class="group bottom-0 left-0 right-0 flex flex-row justify-center space-x-2 bg-secondary-900 px-4 py-2 text-xs text-white">
      <div>Copyright &copy; 2023 kent013, Powered by <a href="https://rio.ne.jp">Rio Corp. </a></div>
    </footer>
  </div>
</main>
