<script lang="ts">
import Contact from "$lib/components/contact.svelte";
import Footer from "$lib/components/footer.svelte";
import NavBar from "$lib/components/nav-bar.svelte";
import { businessInfo } from "$lib/info";
</script>

<svelte:head>
  <title>Contact | {businessInfo.name}</title>
  <meta
    name="description"
    content={`Talk with ${businessInfo.name} about custom built-ins, staircases, and interior woodwork in ${businessInfo.serviceAreas.join(", ")}, ${businessInfo.state}. Call or text to get started.`}
  />
</svelte:head>

<NavBar />
<main class="min-h-screen bg-base-200 pt-18">
  <Contact standalone />
</main>
<Footer />
