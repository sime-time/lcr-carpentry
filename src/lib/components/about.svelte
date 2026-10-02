<script lang="ts">
  import Icon from "@iconify/svelte";
  import { PUBLIC_R2_URL } from "$env/static/public";

  const image = `${PUBLIC_R2_URL}/photos/fireplaces/IMG_0930.JPG`;
</script>

<section
  id="about"
  class="scroll-mt-24 bg-neutral py-20 text-neutral-content sm:py-24 lg:py-32"
  aria-labelledby="about-title"
>
  <div
    class="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16"
  >
    <div
      class="hidden sm:block aspect-square w-full overflow-hidden border-4 border-primary bg-neutral-content/10 rounded"
    >
      <img
        src={image}
        alt="fireplace"
        class="size-full object-cover"
        width="800"
        height="800"
        loading="lazy"
        decoding="async"
      >
    </div>

    <div>
      <p class="mb-4 text-xs tracking-[0.2em] text-secondary uppercase">
        FAMILY-OWNED SINCE 2014
      </p>
      <h2
        id="about-title"
        class="font-display text-3xl leading-tight font-normal tracking-tight sm:text-4xl lg:text-5xl"
      >
        Quality carpentry.<br><span class="text-primary">Built to last.</span>
      </h2>
      <div
        class="mt-6 space-y-5 leading-relaxed font-light text-neutral-content/80 text-base"
      >
        <p>
          Founded by Leo Cisneros in 2014, LCR Carpentry is a family-owned
          business built on quality workmanship and more than 20 years of
          carpentry experience.
        </p>
        <p>
          From custom cabinetry and fireplace surrounds to staircases, trim, and
          entryways, we take pride in doing the job right and delivering quality
          work your family can enjoy for years to come.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <a href="/contact" class="btn btn-primary btn-lg ">
          Let's Talk
          <Icon
            icon="material-symbols:arrow-outward"
            class="size-6"
            aria-hidden="true"
          />
        </a>
        <a href="/gallery" class="btn btn-outline btn-lg"> See Our Work </a>
      </div>
    </div>
  </div>
</section>
