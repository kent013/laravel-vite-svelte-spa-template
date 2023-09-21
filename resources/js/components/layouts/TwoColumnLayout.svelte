<script lang="ts">
  import AppLayout from '~/components/layouts/AppLayout.svelte'
</script>

<AppLayout>
  <aside class="h-full w-72 flex-none px-4 py-4 border-r border-secondary-200">
    <slot name="sidebar" />
  </aside>

  <main class="h-full w-full max-w-none px-4 pt-4 pb-4">
    <slot name="content" />
  </main>
</AppLayout>
