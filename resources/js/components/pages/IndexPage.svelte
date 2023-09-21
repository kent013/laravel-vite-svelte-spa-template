<script lang="ts">
  import TwoColumnLayout from '~/components/layouts/TwoColumnLayout.svelte'
  export let title: String
</script>

<TwoColumnLayout>
  <div slot="sidebar">
    <ul>
      <li>hoge</li>
      <li>moge</li>
    </ul>
  </div>
  <div slot="content">
    <h1 class="block font-bold text-4xl">{title}</h1>
  </div>
</TwoColumnLayout>
