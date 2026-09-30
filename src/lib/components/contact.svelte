<script lang="ts">
import Icon from "@iconify/svelte";
import { businessInfo } from "$lib/info";

let { standalone = false }: { standalone?: boolean } = $props();

const contactOptions = [
	{
		id: "phone",
		label: "Call Us",
		icon: "boxicons:phone",
		title: "Talk it through.",
		description:
			"Tell us what you have in mind. We can talk through your space, your ideas, and where to start.",
		detail: businessInfo.phone,
		href: businessInfo.phoneHref,
		primary: true,
	},
	{
		id: "text",
		label: "Text Us",
		icon: "boxicons:message-bubble",
		title: "Send a little inspiration.",
		description:
			"Have a photo of your space or a detail you love? Send it our way with a few words about your project.",
		detail: businessInfo.phone,
		href: businessInfo.smsHref,
		primary: false,
	},
	{
		id: "email",
		label: "Email Us",
		icon: "boxicons:envelope",
		title: "Share the details.",
		description:
			"Put your plans in writing. Share measurements, inspiration, and what you would like to create.",
		detail: businessInfo.email || "Email details coming soon",
		href: businessInfo.email ? `mailto:${businessInfo.email}` : "",
		primary: false,
	},
];
</script>

<section
  id="contact"
  class="scroll-mt-24 bg-base-200 py-20 text-base-content sm:py-24 lg:py-32"
  aria-labelledby="contact-title"
>
  <div class="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
    <div class="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
      <div>
        <p class="mb-4 text-xs tracking-widest text-secondary uppercase">Contact {businessInfo.name}</p>
        <svelte:element
          this={standalone ? "h1" : "h2"}
          id="contact-title"
          class="font-display text-4xl leading-tight font-normal tracking-tight sm:text-5xl lg:text-6xl"
        >
          Your home.<br />
          <span class="text-secondary">Your next chapter.</span>
        </svelte:element>
      </div>
      <p class="max-w-md text-base leading-relaxed font-light text-base-content/80 lg:pb-2">
        A built-in you've been imagining. A staircase ready for a new look.
        Whatever you're planning, it starts with a conversation.
        Get in touch your way.
      </p>
    </div>

    <div class="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
      {#each contactOptions as option (option.id)}
        <article class={["card card-border border-2 bg-base-100", option.primary && "border-primary"]}>
          <div class="card-body gap-5 p-6 lg:p-8">
            <Icon icon={option.icon} class="size-8 text-secondary" aria-hidden="true" />
            <svelte:element
              this={standalone ? "h2" : "h3"}
              class="card-title font-display text-2xl font-normal"
            >
              {option.title}
            </svelte:element>
            <p class="text-sm leading-relaxed font-light text-base-content/80">
              {option.description}
            </p>
            <div class="card-actions mt-3 w-full">
                <a
                  href={option.href}
                  class={["btn btn-block btn-lg min-h-12 motion-reduce:transition-none", option.primary ? "btn-primary" : "btn-outline"]}
                >
                  {option.label}
                  <Icon icon="lucide:arrow-up-right" class="size-5" aria-hidden="true" />
                </a>
            </div>
          </div>
        </article>
      {/each}
    </div>

  </div>
</section>
