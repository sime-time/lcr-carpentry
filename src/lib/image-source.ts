import { PUBLIC_R2_URL } from "$env/static/public";

const R2_URL = `${PUBLIC_R2_URL}/photos`;

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type GalleryCategory = {
  id: string;
  label: string;
  images: GalleryImage[];
};

type ImageSource =
  | string
  | readonly [filename: string, width: number, height: number];

function createGalleryCategory(
  id: string,
  label: string,
  sources: readonly ImageSource[],
): GalleryCategory {
  return {
    id,
    label,
    images: sources.map((source, index) => {
      const [filename, width, height] =
        typeof source === "string" ? [source, 3024, 4032] : source;
      const descriptiveName = filename
        .replace(/\.webp(?: \.webp)?$/i, "")
        .replaceAll("-", " ");
      const alt = filename.startsWith("IMG_")
        ? `${label} project photo ${index + 1}`
        : descriptiveName.replace(/\b\w/g, (letter) => letter.toUpperCase());

      return {
        id: `${id}-${filename}`,
        src: `${R2_URL}/${id}/${encodeURIComponent(filename)}`,
        alt,
        width,
        height,
      };
    }),
  };
}

export const heroImages = [
  {
    src: `${R2_URL}/stairs-and-railings/IMG_0963.webp`,
    alt: "Custom spiral staircase",
    width: 3024,
    height: 4032,
  },
  {
    src: `${R2_URL}/stairs-and-railings/railings-polished.webp`,
    alt: "Custom railings with polished floor",
    width: 3024,
    height: 4032,
  },
  {
    src: `${R2_URL}/built-ins-and-cabinets/mudroom-finished.webp`,
    alt: "Finished custom mudroom cabinetry",
    width: 3024,
    height: 4032,
  },
  {
    src: `${R2_URL}/ceilings/vaulted-wood-beam-ceiling.webp`,
    alt: "Vaulted ceiling with wood beams",
    width: 3024,
    height: 4032,
  },
];

export const aboutImage = {
  src: `${R2_URL}/stairs-and-railings/railings-polished.webp`,
  alt: "Custom railings with polished floor",
  width: 3024,
  height: 4032,
};

export const ourWorkImages = [
  {
    id: "built-ins-and-cabinets",
    label: "Built-ins & Cabinets",
    src: `${R2_URL}/built-ins-and-cabinets/mudroom-finished.webp`,
    alt: "Finished custom mudroom cabinetry",
    width: 3024,
    height: 4032,
    href: "/gallery?category=built-ins-and-cabinets",
  },
  {
    id: "stairs-and-railings",
    label: "Stairs & Railings",
    src: `${R2_URL}/stairs-and-railings/white-post-cable-rail-stairs.webp`,
    alt: "Custom staircase with cables",
    width: 3024,
    height: 4032,
    href: "/gallery?category=stairs-and-railings",
  },
  {
    id: "ceilings",
    label: "Ceilings",
    src: `${R2_URL}/ceilings/vaulted-wood-beam-ceiling.webp`,
    alt: "Vaulted ceiling with wood beams",
    width: 3024,
    height: 4032,
    href: "/gallery?category=ceilings",
  },
  {
    id: "fireplace-mantels",
    label: "Fireplace Mantels",
    src: `${R2_URL}/fireplace-mantels/white-mantel-black-marble.webp`,
    alt: "Custom white fireplace mantel with black marble surround",
    width: 4032,
    height: 3024,
    href: "/gallery?category=fireplace-mantels",
  },
];

export const builtInsAndCabinets = createGalleryCategory(
  "built-ins-and-cabinets",
  "Built-ins & Cabinets",
  [
    "IMG_0931.webp",
    "IMG_0933.webp",
    "IMG_0956.webp",
    "IMG_0974.webp",
    "IMG_0977.webp",
    "IMG_0978.webp",
    "IMG_0979.webp",
    ["IMG_0992.webp", 2688, 1520],
    ["IMG_0994.webp", 2688, 1520],
    "IMG_1076.webp",
    "IMG_1280.webp",
    "IMG_1375.webp",
    "IMG_3081.webp",
    "mudroom-finished.webp",
    "mudroom-lockers.webp",
    "white-closet-drawer-tower.webp",
  ],
);

export const ceilings = createGalleryCategory("ceilings", "Ceilings", [
  ["geometric-wood-ceiling-beams.webp", 4032, 3024],
  "IMG_1414.webp",
  "vaulted-wood-beam-ceiling.webp",
  "white-coffered-ceiling.webp",
]);

export const fireplaceMantels = createGalleryCategory(
  "fireplace-mantels",
  "Fireplace Mantels",
  [
    "fireplace-finished.webp",
    "IMG_0980.webp",
    ["IMG_0981.webp", 4032, 3024],
    "IMG_1415.webp",
    ["IMG_1441.webp", 4032, 3024],
    "IMG_4732.webp",
    ["white-mantel-black-marble.webp", 4032, 3024],
  ],
);

export const stairsAndRailings = createGalleryCategory(
  "stairs-and-railings",
  "Stairs & Railings",
  [
    "black-post-cable-rail-stairs.webp",
    "IMG_0738.webp",
    "IMG_0794.webp",
    "IMG_0957.webp",
    "IMG_0958.webp",
    ["IMG_0960.webp", 4032, 3024],
    "IMG_0961.webp",
    ["IMG_0962.webp", 4032, 3024],
    "IMG_0963.webp",
    "IMG_0965.webp",
    "IMG_0969.webp",
    "IMG_0971.webp",
    "IMG_0972.webp",
    ["IMG_0986.webp", 2688, 1520],
    ["IMG_0987.webp", 1520, 2688],
    ["IMG_0991.webp", 2688, 1520],
    ["IMG_0995.webp", 2688, 1520],
    ["IMG_0996.webp", 2688, 1520],
    ["IMG_0997.webp", 2688, 1520],
    "IMG_1082.webp",
    "IMG_1184.webp",
    "IMG_1368.webp",
    "IMG_1418.webp",
    ["IMG_1440.webp", 4032, 3024],
    "IMG_1462.webp",
    ["IMG_1463.webp", 4032, 3024],
    ["IMG_1466.webp", 4032, 3024],
    "IMG_1514.webp",
    "IMG_1515.webp",
    "IMG_2817.webp",
    "IMG_2818.webp",
    "IMG_2820.webp",
    "IMG_3140.webp",
    "IMG_3141.webp",
    "IMG_3142.webp",
    "IMG_3143.webp",
    "IMG_3144.webp",
    "IMG_3145.webp",
    "IMG_3146.webp",
    "IMG_3147.webp",
    "IMG_3463.webp",
    "IMG_3480.webp",
    "IMG_3481.webp",
    "IMG_3483.webp",
    "IMG_3484.webp",
    "IMG_3486.webp",
    "IMG_3691.webp",
    "IMG_3692.webp",
    "IMG_3720.webp",
    "IMG_3722.webp",
    "IMG_4679.webp",
    "IMG_4680.webp",
    "IMG_4683.webp",
    "IMG_4739.webp",
    "IMG_4740.webp",
    "oak-tread-black-baluster-stairs.webp",
    "railings-polished.webp",
    "stairs-unfinished.webp",
    "white-post-cable-rail-stairs.webp",
    "white-stairs.webp",
  ],
);

export const wallsAndTrim = createGalleryCategory(
  "walls-and-trim",
  "Walls & Trim",
  [
    "chevron-accent-wall.webp",
    "IMG_0973.webp",
    ["IMG_1020.webp", 4032, 3024],
    ["IMG_1429.webp", 4032, 3024],
    "IMG_3783.webp",
    "IMG_3785.webp",
    "IMG_4723.webp",
    "IMG_4724.webp",
    "IMG_4726.webp",
    "IMG_4728.webp",
  ],
);

export const galleryCategories = [
  builtInsAndCabinets,
  ceilings,
  fireplaceMantels,
  stairsAndRailings,
  wallsAndTrim,
];
