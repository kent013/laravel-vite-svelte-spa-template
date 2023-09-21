<script lang="ts">
  export let value: string | undefined
  export let classes: string = ''
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="block font-medium text-sm text-gray-700 dark:text-gray-300 {classes}" {...$$props}>
  {#if value}
    <span>{value}</span>
  {:else}
    <span><slot /></span>
  {/if}
</label>
