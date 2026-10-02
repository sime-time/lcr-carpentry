<script lang="ts">
  import Icon from "@iconify/svelte";
  import { businessInfo, navItems } from "$lib/info";

  let scrollY = $state(0);
  const isScrolled = $derived(scrollY > 8);

  let isMobileMenuOpen = $state(false);

  function toggleMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function closeMenu() {
    isMobileMenuOpen = false;
  }
</script>

<svelte:window bind:scrollY />

<header
  class={[
    "fixed top-0 left-0 z-50 flex w-full justify-center transition-colors duration-300 motion-reduce:transition-none",
    isScrolled || isMobileMenuOpen ? "bg-neutral" : "bg-transparent",
  ]}
>
  <section
    class="flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6"
  >
    <div>
      <!-- Logo -->
      <a href="/#hero" class="inline-flex items-center">
        <img
          src="/lcr-logo-transparent.png"
          alt="LCR Carpentry"
          class="block h-14 w-auto"
          width="1280"
          height="502"
        >
      </a>
    </div>

    <!-- Desktop Nav -->
    <nav class="hidden lg:flex">
      <ul class="menu menu-horizontal px-1 text-lg gap-4">
        {#each navItems as item}
          <li>
            <a href={item.href} class="text-base-content hover:text-accent">
              {item.label}
            </a>
          </li>
        {/each}
      </ul>
    </nav>

    <!-- End Button -->
    <div class="flex items-center gap-1 lg:gap-4">
      <a
        class="btn btn-outline btn-lg hidden lg:flex"
        href={`mailto:${businessInfo.email}`}
      >
        <Icon icon="boxicons:envelope" class="size-5" />
        Email Us
      </a>

      <a
        class="btn btn-primary btn-lg hidden lg:flex"
        href={businessInfo.phoneHref}
      >
        <Icon icon="boxicons:phone-filled" class="size-5" />
        Call Now
      </a>

      <!-- Mobile Call Button -->
      <a
        href={businessInfo.phoneHref}
        class="btn btn-primary lg:hidden"
        aria-label="Call WOLO Roofing now"
      >
        <Icon icon="boxicons:phone-filled" class="size-4" />
        <span>Call Now</span>
      </a>

      <!-- Mobile Menu Toggle -->
      <button
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isMobileMenuOpen}
        aria-label={isMobileMenuOpen
          ? "Close navigation menu"
          : "Open navigation menu"}
        class="btn btn-ghost border-none text-base-content hover:text-accent hover:bg-transparent lg:hidden"
        onclick={toggleMenu}
      >
        <span class="size-7">
          <Icon
            icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"}
            class="h-7 w-auto"
          />
        </span>
      </button>
    </div>
  </section>

  <!-- Mobile Nav Dropdown -->
  {#if isMobileMenuOpen}
    <nav
      id="mobile-navigation"
      class="absolute top-full left-0 flex w-full flex-col gap-6 border-t border-neutral-content/30 bg-neutral/95 px-[5%] pt-8 pb-8 text-neutral-content shadow-lg backdrop-blur lg:hidden"
    >
      {#each navItems as navItem}
        <a
          href={navItem.href}
          class="text-xl font-medium transition-colors hover:text-accent"
          onclick={closeMenu}
        >
          {navItem.label}
        </a>
      {/each}
      <a
        href={businessInfo.smsHref}
        class="btn btn-outline btn-block btn-lg"
        onclick={closeMenu}
      >
        <Icon icon="boxicons:message-bubble" />
        Text Us
      </a>

      <a
        class="btn btn-primary btn-block btn-lg"
        href={businessInfo.phoneHref}
        onclick={closeMenu}
      >
        <Icon icon="boxicons:phone-filled" />
        {businessInfo.phone}
      </a>
    </nav>
  {/if}
</header>
