<script lang="ts">
  import Contact from "$lib/components/contact.svelte";
  import { businessInfo } from "$lib/info";
</script>

<svelte:head>
  <title>Gallery | {businessInfo.name}</title>
  <meta
    name="description"
    content={`${businessInfo.name} Portfolio and Gallery`}
  >
</svelte:head>

<main class="min-h-screen"></main>
