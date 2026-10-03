<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import Contact from "$lib/components/contact.svelte";
  import { galleryCategories } from "$lib/image-source";
  import { businessInfo } from "$lib/info";

  const allImages = galleryCategories.flatMap((category) => category.images);

  const selectedCategory = $derived.by(() => {
    const category = page.url.searchParams.get("category");

    return galleryCategories.some((item) => item.id === category)
      ? category
      : "all";
  });

  const visibleImages = $derived(
    selectedCategory === "all"
      ? allImages
      : (galleryCategories.find((category) => category.id === selectedCategory)
          ?.images ?? []),
  );

  function selectCategory(category: string) {
    const url = new URL(page.url);

    if (category === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", category);
    }

    void goto(url, { keepFocus: true, noScroll: true });
  }
</script>

<svelte:head>
  <title>Gallery | {businessInfo.name}</title>
  <meta
    name="description"
    content={`${businessInfo.name} Portfolio and Gallery`}
  >
</svelte:head>

<main class="min-h-screen bg-base-200 pt-16 text-base-content">
  <section class="py-16 sm:py-20 lg:py-24" aria-labelledby="gallery-title">
    <div class="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
      <div class="max-w-5xl">
        <p class="mb-4 text-xs tracking-widest text-secondary uppercase">
          Recent craftsmanship
        </p>
        <h1
          id="gallery-title"
          class="font-display text-5xl leading-tight font-normal tracking-tight sm:text-6xl lg:text-7xl"
        >
          Built to belong in <span class="text-primary">your home.</span>
        </h1>
        <p
          class="mt-6 max-w-2xl text-base leading-relaxed font-light text-base-content/80 sm:text-lg"
        >
          Explore custom cabinetry, staircases, ceilings, mantels, and finish
          work built around each home's character.
        </p>
        <p
          id="category-start"
          class="mt-6 max-w-2xl text-base leading-relaxed  text-secondary sm:text-lg"
        >
          More than 20 years of hands-on carpentry, one project at a time.
        </p>
      </div>

      <div
        id="category-filter"
        class="mt-10 border-y border-base-content/15 py-5 sm:mt-12"
      >
        <fieldset class="flex flex-wrap gap-2">
          <legend class="sr-only">Filter gallery by project category</legend>
          <button
            type="button"
            class={[
              "btn btn-sm sm:btn-md motion-reduce:transition-none",
              selectedCategory === "all" ? "btn-primary" : "btn-ghost",
            ]}
            aria-pressed={selectedCategory === "all"}
            onclick={() => selectCategory("all")}
          >
            All <span class="opacity-60">{allImages.length}</span>
          </button>

          {#each galleryCategories as category (category.id)}
            <button
              type="button"
              class={[
                "btn btn-sm sm:btn-md motion-reduce:transition-none",
                selectedCategory === category.id ? "btn-primary" : "btn-ghost",
              ]}
              aria-pressed={selectedCategory === category.id}
              onclick={() => selectCategory(category.id)}
            >
              {category.label}
              <span class="opacity-60">{category.images.length}</span>
            </button>
          {/each}
        </fieldset>
      </div>

      <p class="mt-6 text-sm text-base-content/60" aria-live="polite">
        Showing {visibleImages.length}
        {visibleImages.length === 1 ? "project" : "projects"}
      </p>

      <ul class="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3 lg:gap-6">
        {#each visibleImages as image (image.id)}
          <li
            class="mb-5 break-inside-avoid overflow-hidden bg-base-300 lg:mb-6"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              class="h-auto w-full transition-transform duration-500 hover:scale-[1.02] motion-reduce:transition-none"
            >
          </li>
        {/each}
      </ul>
    </div>
  </section>

  <Contact />
</main>
