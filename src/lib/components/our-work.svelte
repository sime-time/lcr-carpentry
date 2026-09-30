<script lang="ts">
import { imageSources } from "$lib/image-source";

// Update each href here when the gallery supports category query parameters.
const categories = [
	{
		id: "built-ins-cabinetry",
		label: "Built-ins & Cabinetry",
		image: imageSources["Built-ins and Cabinetry/IMG_0990.JPG"],
		href: "/gallery",
	},
	{
		id: "staircases-railings",
		label: "Staircases & Railings",
		image: imageSources["Staircases and Railings/IMG_0792.JPG"],
		href: "/gallery",
	},
	{
		id: "walls-trim",
		label: "Walls & Trim",
		image: imageSources["Walls and Trim/IMG_1461.JPG"],
		href: "/gallery",
	},
	{
		id: "mudrooms-entryways",
		label: "Mudrooms & Entryways",
		image: imageSources["Mudrooms and Entryway Benches/IMG_0988.JPG"],
		href: "/gallery",
	},
];
</script>

<section
  id="our-work"
  class="scroll-mt-24 bg-neutral-content py-20 text-neutral sm:py-24 lg:py-32"
  aria-labelledby="our-work-title"
>
  <div class="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
    <h2
      id="our-work-title"
      class="mb-10 text-center font-display text-3xl font-normal  sm:mb-14 sm:text-4xl lg:mb-16 lg:text-5xl"
    >
      Our Work
    </h2>

    <ul class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 lg:grid-cols-4">
      {#each categories as category (category.id)}
        <li class="flex min-w-0 flex-col items-start">
          <div class="aspect-square w-full overflow-hidden bg-neutral/10">
            <img
              src={category.image.src}
              alt={category.image.alt}
              class="size-full object-cover"
              style:object-position={category.image.objectPosition}
              style:transform={`rotate(${category.image.rotation}deg)`}
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </div>

          <h3 class="mt-6 mb-6 font-sans text-sm leading-6 font-normal tracking-[0.16em] uppercase sm:min-h-12 lg:mt-8 lg:mb-8">
            {category.label}
          </h3>

          <a
            href={category.href}
            class="btn btn-neutral btn-outline mt-auto min-h-12 px-6 tracking-[0.2em] uppercase motion-reduce:transition-none"
            aria-label={`View work: ${category.label}`}
          >
            View Work
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>
