<script lang="ts">
  import AppLayout from '~/components/layouts/AppLayout.svelte'
  export let title: String
</script>

<AppLayout>
  <div class="flex flex-col items-center text-center space-y-4">
    <h1 class="block mt-4 font-bold text-4xl">{title}</h1>
  </div>
</AppLayout>
