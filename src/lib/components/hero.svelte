<script lang="ts">
import Icon from "@iconify/svelte";
import { onMount } from "svelte";
import { heroImages } from "$lib/image-source";
import { businessInfo } from "$lib/info";

const slideDuration = 6500;
const rotationClasses = {
	0: "rotate-0",
	90: "rotate-90",
	180: "rotate-180",
	270: "rotate-270",
};
let activeIndex = $state(0);
let loadThrough = $state(0);
let loaded = $state<boolean[]>([]);
let failed = $state<boolean[]>([]);
let paused = $state(false);
let reducedMotion = $state(true);
let pageVisible = $state(true);
let inView = $state(true);
let section: HTMLElement;

const canRotate = $derived(
	heroImages.filter((_, index) => !failed[index]).length > 1,
);
const isPlaying = $derived(!paused && !reducedMotion);

onMount(() => {
	const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
	const updateMotion = () => {
		reducedMotion = preference.matches;
	};
	const updateVisibility = () => {
		pageVisible = !document.hidden;
	};
	updateMotion();
	updateVisibility();
	preference.addEventListener("change", updateMotion);
	document.addEventListener("visibilitychange", updateVisibility);
	const observer = new IntersectionObserver(([entry]) => {
		inView = entry.isIntersecting;
	});
	observer.observe(section);
	return () => {
		preference.removeEventListener("change", updateMotion);
		document.removeEventListener("visibilitychange", updateVisibility);
		observer.disconnect();
	};
});

$effect(() => {
	if (
		!isPlaying ||
		!pageVisible ||
		!inView ||
		!canRotate ||
		!loaded[activeIndex]
	)
		return;
	const timer = window.setInterval(() => {
		for (let step = 1; step < heroImages.length; step++) {
			const next = (activeIndex + step) % heroImages.length;
			if (loaded[next] && !failed[next]) {
				activeIndex = next;
				break;
			}
		}
	}, slideDuration);
	return () => window.clearInterval(timer);
});

function imageReady(index: number) {
	loaded[index] = true;
	// Prioritize the first photo, then load the rest sequentially. Never fade to
	// a photo that has not loaded, including when a future R2 URL is unavailable.
	loadThrough = Math.min(index + 1, heroImages.length - 1);
	if (failed[activeIndex]) activeIndex = index;
}

function imageFailed(index: number) {
	failed[index] = true;
	loadThrough = Math.min(index + 1, heroImages.length - 1);
	if (index === activeIndex) {
		const fallback = loaded.findIndex((ready, i) => ready && !failed[i]);
		if (fallback !== -1) activeIndex = fallback;
	}
}

function selectImage(index: number) {
	paused = true;
	activeIndex = index;
}
</script>

<section
  id="hero"
  class="hero relative isolate min-h-[max(40rem,100svh)] w-full overflow-hidden bg-neutral text-neutral-content"
  aria-labelledby="hero-title"
  bind:this={section}
>
  <div id="hero-photography" class="pointer-events-none absolute inset-0 -z-20" aria-live="off">
    {#each heroImages as image, index (image.id)}
      {#if index <= loadThrough}
        <div
          class={["absolute inset-0 [container-type:size] transition-opacity duration-1400 ease-in-out motion-reduce:transition-none", index === activeIndex && !failed[index] ? "opacity-100" : "opacity-0"]}
          aria-hidden={index !== activeIndex || failed[index]}
        >
          <!-- Quarter turns swap the image dimensions to keep the hero covered. -->
          <img
            src={image.src}
            alt={image.alt}
            class={[
              "absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-cover object-(--mobile-crop) sm:object-(--crop)",
              image.rotation === 90 || image.rotation === 270 ? "h-[100cqw] w-[100cqh]" : "size-full",
              rotationClasses[image.rotation],
            ]}
            style:--crop={image.objectPosition}
            style:--mobile-crop={image.mobileObjectPosition}
            fetchpriority={index === 0 ? "high" : "low"}
            loading="eager"
            decoding="async"
            onload={() => imageReady(index)}
            onerror={() => imageFailed(index)}
          />
        </div>
      {/if}
    {/each}
  </div>

  <div class="hero-overlay pointer-events-none absolute inset-0 -z-10 bg-transparent bg-linear-to-t from-black/80 via-black/40 to-transparent" aria-hidden="true"></div>
  <div class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-black/50  to-transparent" aria-hidden="true"></div>
  <div class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/30  to-transparent" aria-hidden="true"></div>

  <div class="hero-content relative mx-auto w-full max-w-7xl flex-col items-start justify-center gap-0 self-stretch px-6 py-32 text-left sm:px-10 lg:px-16">
    <div class="max-w-2xl">
      <h1 id="hero-title" class="font-display text-5xl leading-[1.05] font-normal tracking-tight sm:text-6xl lg:text-7xl">
        LCR <span class="block">Carpentry</span>
      </h1>
      <p class="mt-5 max-w-sm text-sm leading-relaxed font-light text-neutral-content/90 sm:text-base">
        Thoughtful details.<br class="sm:hidden" /> Beautifully crafted spaces.
      </p>
      <a
        href="/contact"
        class="btn btn-primary btn-lg mt-7 min-w-40 gap-3 focus-visible:outline-secondary motion-reduce:transition-none"
      >
       Let's Talk 
        <Icon icon="material-symbols:arrow-outward" class="size-6" aria-hidden="true" />
      </a>
    </div>

    <div class="absolute inset-x-0 bottom-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 sm:bottom-8 sm:px-10 lg:bottom-10 lg:px-16">
      <p class="text-xs leading-relaxed font-light tracking-wide text-neutral-content/80">
        {businessInfo.serviceAreas.join(" · ")}
      </p>

      {#if heroImages.length > 1}
        <div class="flex items-center gap-1 sm:gap-2" role="group" aria-label="Project photo controls">
          <div class="flex items-center" role="group" aria-label="Choose a project photo">
            {#each heroImages as image, index (image.id)}
              <button
                type="button"
                class="btn btn-circle btn-ghost h-11 w-10 border-0 text-neutral-content hover:bg-neutral-content/10 focus-visible:outline-secondary disabled:bg-transparent disabled:text-neutral-content/25 motion-reduce:transition-none sm:size-11"
                aria-label={`Show photo ${index + 1}: ${image.category}`}
                aria-pressed={index === activeIndex}
                aria-controls="hero-photography"
                disabled={!loaded[index] || failed[index]}
                onclick={() => selectImage(index)}
              >
                <span class={["block h-0.5 w-5 bg-current transition-opacity motion-reduce:transition-none", index === activeIndex ? "opacity-100" : "opacity-40"]}></span>
              </button>
            {/each}
          </div>
          {#if !reducedMotion && canRotate}
            <button
              type="button"
              class="btn btn-circle btn-outline size-11 border-neutral-content/40 bg-transparent text-neutral-content hover:border-neutral-content hover:bg-neutral-content/10 focus-visible:outline-secondary motion-reduce:transition-none"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              aria-controls="hero-photography"
              onclick={() => { paused = !paused; }}
            >
              <Icon icon={isPlaying ? "lucide:pause" : "lucide:play"} class="size-4" aria-hidden="true" />
            </button>
          {/if}
        </div>
      {/if}
    </div>
  </div>
</section>
