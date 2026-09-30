<script lang="ts">
import Icon from "@iconify/svelte";
import { imageSources } from "$lib/image-source";
import { businessInfo } from "$lib/info";

const image = imageSources["Fireplaces/IMG_0930.JPG"];
</script>

<section
  id="about"
  class="scroll-mt-24 bg-neutral py-20 text-neutral-content sm:py-24 lg:py-32"
  aria-labelledby="about-title"
>
  <div class="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16">
    <div class="aspect-square w-full overflow-hidden border-4 border-primary bg-neutral-content/10 rounded">
      <img
        src={image.src}
        alt={image.alt}
        class="size-full object-cover"
        style:object-position={image.objectPosition}
        style:transform={`rotate(${image.rotation}deg)`}
        width="800"
        height="800"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div>
      <p class="mb-4 text-xs tracking-[0.2em] text-secondary uppercase">
        About {businessInfo.name}
      </p>
      <h2
        id="about-title"
        class="font-display text-3xl leading-tight font-normal tracking-tight sm:text-4xl lg:text-5xl"
      >
        Thoughtful details.<br />Built around you.
      </h2>
      <div class="mt-6 space-y-5 text-sm leading-relaxed font-light text-neutral-content/80 sm:text-base">
        <p>
          Your home should feel like your own. At {businessInfo.name}, we create
          custom carpentry that brings character and everyday purpose to the spaces
          you live in.
        </p>
        <p>
          From built-in cabinetry and fireplace surrounds to staircases, trim, and
          welcoming entryways, our work is shaped around your home and the details
          that matter to you.
        </p>
        <p>
          Serving {businessInfo.serviceAreas.slice(0, -1).join(", ")}, and
          {businessInfo.serviceAreas.at(-1)}, {businessInfo.state}.
        </p>
      </div>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
<a
        href="/contact"
        class="btn btn-primary btn-lg "
      >
        Let's Talk

        <Icon icon="material-symbols:arrow-outward" class="size-6" aria-hidden="true" />
      </a>
      <a
        href="/gallery"
        class="btn btn-outline btn-lg"
      >
				See Our Work 
      </a>
			</div>
      
    </div>
  </div>
</section>
