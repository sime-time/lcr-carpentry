<script lang="ts">
import Icon from "@iconify/svelte";
import { businessInfo, navItems } from "$lib/info";
</script>

<footer class="bg-neutral text-neutral-content">
  <div class="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
    <div class="footer footer-vertical gap-10 py-14 sm:grid-cols-2 lg:footer-horizontal lg:py-16">
      <aside class="gap-5">
        <a href="/#hero" aria-label={`${businessInfo.name} home`}>
          <img
            src="/lcr-logo-transparent.png"
            alt={businessInfo.name}
            class="h-auto w-44"
            width="1280"
            height="502"
            loading="lazy"
            decoding="async"
          />
        </a>
        <p class="max-w-60 leading-relaxed">
          Custom built-ins, staircases,<br />
          and interior woodwork.
        </p>
      </aside>

      <nav aria-labelledby="footer-explore-title">
        <h2 id="footer-explore-title" class="footer-title">Explore</h2>
				{#each navItems as navItem}
					<a href={navItem.href} class="link link-hover">{navItem.label}</a>
				{/each}
      </nav>

      <div>
        <h2 class="footer-title">Service Areas</h2>
        <ul class="grid gap-2">
          {#each businessInfo.serviceAreas as area (area)}
            <li>{area}</li>
          {/each}
        </ul>
        <p class="mt-2">{businessInfo.state}</p>
      </div>

      <div>
        <h2 class="footer-title">Let's Talk</h2>
        <p class="mb-2">Have a project in mind?</p>
        <a href={businessInfo.phoneHref} class="btn btn-primary motion-reduce:transition-none">
          <Icon icon="boxicons:phone-filled" class="size-4" aria-hidden="true" />
          {businessInfo.phone}
        </a>
        <a href={businessInfo.smsHref} class="link link-hover mt-2">Text Us</a>
      </div>
    </div>

    <div class="flex flex-col gap-4 border-t border-neutral-content/20 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {businessInfo.legalName}. All rights reserved.</p>
      <a href="/#hero" class="link link-hover">Back to top</a>
    </div>
  </div>
</footer>
