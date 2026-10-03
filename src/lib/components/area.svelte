<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<section
  id="area"
  class="scroll-mt-24 bg-neutral py-20 text-neutral-content sm:py-24 lg:py-32"
>
  <div
    class="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 sm:px-10 md:grid-cols-2 lg:gap-20 lg:px-16"
  >
    <div>
      <p class="mb-4 text-xs tracking-[0.2em] text-secondary uppercase">
        Serving Westfield, Carmel & Fishers
      </p>
      <h2
        id="about-title"
        class="font-display text-3xl leading-tight font-normal tracking-tight sm:text-4xl lg:text-5xl"
      >
        Proudly serving your neighborhood.
      </h2>
      <div
        class="mt-6 space-y-5 leading-relaxed font-light text-neutral-content/80 text-base"
      >
        <p>
          LCR Carpentry proudly serves homeowners throughout Westfield, Carmel,
          Fishers, and the surrounding Hamilton County area.
        </p>
        <p>
          From custom built-ins and trim work to fireplaces, staircases, and
          more, we bring quality craftsmanship and over 20 years of experience.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <a href="/contact" class="btn btn-primary btn-lg ">
          Contact Us
          <Icon
            icon="material-symbols:arrow-outward"
            class="size-6"
            aria-hidden="true"
          />
        </a>
        <a href="/gallery" class="btn btn-outline btn-lg"> Our Portfolio </a>
      </div>
    </div>

    <div
      class="overflow-hidden rounded-lg aspect-4/3 w-full border-3 border-secondary"
    >
      <iframe
        src="https://www.google.com/maps?q=Hamilton+County,Indiana&output=embed"
        width="100%"
        height="100%"
        style="border:0"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="LCR Carpentry service area in Westfield, Carmel, and Fishers, Indiana"
      ></iframe>
    </div>
  </div>
</section>
