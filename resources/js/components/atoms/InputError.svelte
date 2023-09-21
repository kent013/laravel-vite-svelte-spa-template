<script lang="ts">
  export let message: string | undefined
  export let classes: string = ''
</script>

{#if message}
  <p class="text-sm text-red-600 dark:text-red-400 mt-2 {classes}">
    {message}
  </p>
{/if}
