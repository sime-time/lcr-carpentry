export type ProjectImage = {
	id: string;
	src: string;
	alt: string;
	category: string;
	rotation: 0 | 90 | 180 | 270;
	objectPosition: string;
	mobileObjectPosition: string;
};

// Vite resolves local assets to deployable URLs. A glob also lets the site build
// without the gitignored photos folder once the sources below point to R2.
const localFiles = import.meta.glob<string>(
	"./assets/photos/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
	{ eager: true, query: "?url", import: "default" },
);

function localPhoto(path: string): string {
	return localFiles[`./assets/photos/${path}`] ?? "";
}

// One override object per photo you want to customize. The key is its path
// relative to assets/photos. Add any other catalog photo here in the same way.
// For R2, replace src with its public HTTPS URL and adjust crop positions as needed.
// Browsers already respect EXIF orientation. Only add rotation for files that
// still appear sideways in the browser; these five originals need no extra turn.
export const imageOverrides: Record<string, Partial<Omit<ProjectImage, "id">>> = {
	"Staircases and Railings/IMG_0792.JPG": {
		src: localPhoto("Staircases and Railings/IMG_0792.JPG"),
		alt: "Open staircase with wood treads, white posts, and horizontal cable railings",
		category: "Staircases & railings",
		rotation: 0,
		objectPosition: "50% 50%",
		mobileObjectPosition: "50% 45%",
	},
	"Fireplaces/IMG_0930.JPG": {
		src: localPhoto("Fireplaces/IMG_0930.JPG"),
		alt: "Black fireplace framed by a white mantel, built-in shelving, and brass-handled cabinets",
		rotation: 0,
		objectPosition: "50% 45%",
	},
	"Walls and Trim/IMG_1461.JPG": {
		src: localPhoto("Walls and Trim/IMG_1461.JPG"),
		alt: "Geometric wood trim across a charcoal accent wall beneath a high window",
		category: "Walls & trim",
		rotation: 0,
	},
	"Built-ins and Cabinetry/IMG_0990.JPG": {
		src: localPhoto("Built-ins and Cabinetry/IMG_0990.JPG"),
		alt: "Custom under-stair storage with open shelving and a built-in wine rack",
		category: "Built-ins & cabinetry",
		rotation: 0,
	},
	"Mudrooms and Entryway Benches/IMG_0988.JPG": {
		src: localPhoto("Mudrooms and Entryway Benches/IMG_0988.JPG"),
		alt: "Wood entryway bench with open shoe storage and a shiplap back above patterned tile",
		category: "Mudrooms & entryways",
		objectPosition: "50% 55%",
	},
};

const localEntries = Object.entries(localFiles).map(([path, src]) => {
	const id = path.replace("./assets/photos/", "");
	return [id, src] as const;
});
const localSources = Object.fromEntries(localEntries);

// Every local photo gets its own object, addressable by folder/filename.
// Remote-only overrides remain in the catalog even when local files are absent.
export const imageSources: Record<string, ProjectImage> = Object.fromEntries(
	[...new Set([...Object.keys(localSources), ...Object.keys(imageOverrides)])]
		.sort()
		.map((id) => {
			const category = id.split("/")[0];
			return [id, {
				id,
				src: localSources[id] ?? "",
				alt: `LCR Carpentry project: ${category}`,
				category,
				rotation: 0,
				objectPosition: "50% 50%",
				mobileObjectPosition: imageOverrides[id]?.objectPosition ?? "50% 50%",
				...imageOverrides[id],
			} satisfies ProjectImage];
		}),
);

// Change this list to choose the hero photos and their order.
export const heroImages = [
	"Staircases and Railings/IMG_0792.JPG",
	"Fireplaces/IMG_0930.JPG",
	"Walls and Trim/IMG_1461.JPG",
	"Built-ins and Cabinetry/IMG_0990.JPG",
	"Mudrooms and Entryway Benches/IMG_0988.JPG",
].map((id) => imageSources[id]).filter((image) => image?.src);
