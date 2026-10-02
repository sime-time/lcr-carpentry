<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { heroImages } from "$lib/image-source";
  import { businessInfo } from "$lib/info";

  const slideDuration = 4500;

  let activeIndex = $state(0);
  let paused = $state(false);

  onMount(() => {
    const interval = window.setInterval(() => {
      if (!paused) {
        activeIndex = (activeIndex + 1) % heroImages.length;
      }
    }, slideDuration);

    return () => window.clearInterval(interval);
  });

  function selectImage(index: number) {
    activeIndex = index;
    paused = true;
  }
</script>

<section
  id="hero"
  class="hero relative isolate min-h-[max(40rem,100svh)] w-full overflow-hidden bg-neutral text-neutral-content"
  aria-labelledby="hero-title"
>
  <div
    id="hero-photography"
    class="pointer-events-none absolute inset-0 -z-20"
    aria-live="off"
  >
    {#each heroImages as image, index}
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        class={[
          "absolute object-cover transition-opacity duration-1400 ease-in-out motion-reduce:transition-none",
          image.rotation === 0
            ? "inset-0 size-full"
            : "top-1/2 left-1/2 h-[100vw] w-[max(40rem,100svh)]",
          index === activeIndex ? "opacity-100" : "opacity-0",
        ]}
        style:transform={image.rotation === 0
          ? undefined
          : `translate(-50%, -50%) rotate(${image.rotation}deg)`}
        aria-hidden={index !== activeIndex}
        fetchpriority={index === 0 ? "high" : "low"}
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
      >
    {/each}
  </div>

  <div
    class="hero-overlay pointer-events-none absolute inset-0 -z-10 bg-transparent bg-linear-to-t from-black/80 via-black/40 to-transparent"
    aria-hidden="true"
  ></div>

  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-r from-black/50 to-transparent"
    aria-hidden="true"
  ></div>

  <div
    class="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/30 to-transparent"
    aria-hidden="true"
  ></div>

  <div
    class="hero-content relative mx-auto w-full max-w-7xl flex-col items-start justify-center gap-0 self-stretch px-6 py-32 text-left sm:px-10 lg:px-16"
  >
    <div class="max-w-2xl">
      <h1
        id="hero-title"
        class="font-display text-5xl leading-[1.05] font-normal tracking-tight sm:text-6xl lg:text-7xl"
      >
        Woodwork crafted to
        <span class="text-primary">fit your home.</span>
      </h1>

      <p
        class="mt-5 max-w-sm text-base leading-relaxed font-light text-neutral-content/90"
      >
        Custom built-ins, staircases, and finish carpentry for homeowners who
        notice the details.
      </p>

      <a
        href="/contact"
        class="btn btn-primary btn-lg mt-7 min-w-40 gap-3 focus-visible:outline-secondary motion-reduce:transition-none"
      >
        Start Your Project
        <Icon
          icon="material-symbols:arrow-outward"
          class="size-6"
          aria-hidden="true"
        />
      </a>
    </div>

    <div
      class="absolute inset-x-0 bottom-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 sm:bottom-8 sm:px-10 lg:bottom-10 lg:px-16"
    >
      <p
        class="text-xs leading-relaxed font-light tracking-wide text-neutral-content/80"
      >
        {businessInfo.serviceAreas.join(" · ")}
      </p>

      {#if heroImages.length > 1}
        <div class="flex items-center gap-1 sm:gap-2">
          <fieldset class="flex min-w-0 items-center">
            <legend class="sr-only">Choose a project photo</legend>
            {#each heroImages as image, index}
              <button
                type="button"
                class="btn btn-circle btn-ghost border-0 text-neutral-content hover:bg-neutral-content/10 focus-visible:outline-secondary motion-reduce:transition-none sm:size-11"
                aria-label={`Show photo ${index + 1}: ${image.category}`}
                aria-pressed={index === activeIndex}
                aria-controls="hero-photography"
                onclick={() => selectImage(index)}
              >
                <span
                  class={[
                    "block h-0.5 w-5 bg-current transition-opacity motion-reduce:transition-none",
                    index === activeIndex ? "opacity-100" : "opacity-40",
                  ]}
                ></span>
              </button>
            {/each}
          </fieldset>

          <button
            type="button"
            class="btn btn-circle btn-outline size-11 border-neutral-content/40 bg-transparent text-neutral-content hover:border-neutral-content hover:bg-neutral-content/10 focus-visible:outline-secondary motion-reduce:transition-none"
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            aria-controls="hero-photography"
            onclick={() => {
              paused = !paused;
            }}
          >
            <Icon
              icon={paused ? "lucide:play" : "lucide:pause"}
              class="size-4"
              aria-hidden="true"
            />
          </button>
        </div>
      {/if}
    </div>
  </div>
</section>
