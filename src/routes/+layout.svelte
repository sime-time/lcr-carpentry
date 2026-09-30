<script lang="ts">
import "../app.css";
import favicon from "$lib/assets/favicon.svg";
import { businessInfo } from "$lib/info";

let { children } = $props();

const meta = {
	title: `${businessInfo.name} | Custom Carpentry in Carmel, Fishers & Westfield`,
	description:
		"Custom built-ins, staircases, and interior woodwork by LCR Carpentry. Serving Carmel, Fishers, and Westfield, Indiana. Call to talk about your project.",
	url: "https://lcrcarpentry.com/",
};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
  <title>{meta.title}</title>
  <meta name="description" content={meta.description} />
  <meta name="theme-color" content="#303030" />

  <meta property="og:type" content="website">
  <meta property="og:url" content={meta.url}>
  <meta property="og:title" content={meta.title}>
  <meta property="og:description" content={meta.description}>
  <meta property="og:image" content="https://lcrcarpentry.com/og-image.jpg">
  <meta property="og:image:width" content="1280">
  <meta property="og:image:height" content="502">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content={meta.title}>
  <meta name="twitter:description" content={meta.description}>
  <meta name="twitter:image" content="https://woloroofing.com/og-image.jpg">
</svelte:head>

{@render children()}
