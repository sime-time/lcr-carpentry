<script lang="ts">
import "../app.css";
import favicon from "$lib/assets/favicon.svg";
import { businessInfo } from "$lib/info";

let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
  <title>{businessInfo.name} | Custom Carpentry in Carmel, Fishers & Westfield</title>
  <meta name="description" content="Custom built-ins, staircases, and interior woodwork by LCR Carpentry. Serving Carmel, Fishers, and Westfield, Indiana. Call to talk about your project." />
  <meta name="theme-color" content="#535353" />
</svelte:head>

{@render children()}
