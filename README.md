# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
pnpm dlx sv@0.17.1 create --template minimal --types ts --add tailwindcss="plugins:none" --install pnpm lcr-carpentry
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## UI conventions

- Use Tailwind CSS utilities and DaisyUI components (`hero`, `btn`, `btn-outline`,
  etc.) for styling. Only add custom CSS when the utilities cannot express it.
- Use the installed `@iconify/svelte` package for **all UI icons**. Do not add
  hand-written SVG icons, icon fonts, or Unicode characters as icon substitutes.
- Import `Icon` from `@iconify/svelte`, then use named icons such as
  `<Icon icon="lucide:arrow-up-right" class="size-4" aria-hidden="true" />`.
  Give icon-only buttons an accessible `aria-label`; hide decorative icons from
  assistive technology.
- Headings use Fraunces; regular text uses Roboto Slab.

## Project photography

Keep development photos in `src/lib/assets/photos/` (gitignored). `src/lib/image-source.ts`
creates an `imageSources` object for every photo, keyed by its relative folder and filename.
The `heroImages` list in that file selects the five hero photos and their display order.

Customize any image by adding its key to `imageOverrides`. When moving to R2, replace
its `src: localPhoto(...)` with a public URL:

```ts
"Staircases and Railings/IMG_0792.JPG": {
  src: "https://images.your-domain.com/staircase.webp",
  alt: "Open staircase with wood treads, white posts, and cable railings",
  rotation: 0,
  objectPosition: "50% 50%",
  mobileObjectPosition: "50% 45%",
},
```

Use `rotation: 0` by default: browsers already respect EXIF orientation. Only add
90 or 180 degrees if a photo still appears sideways or upside down in the browser.
Crop positions apply before rotation. Remote overrides work without the local files.
Missing sources are omitted from the hero, which retains its text and background color.
Optimize uploaded images for the web; the local asset imports do not resize the originals.

The hero advances every 6.5 seconds with a 1.4-second crossfade. Viewers can pause or
select a photo, and reduced-motion preferences disable automatic playback and fading.
# lcr-carpentry
