import { PUBLIC_R2_URL } from "$env/static/public";

const R2_URL = `${PUBLIC_R2_URL}/photos`;

export const heroImages = [
  {
    src: `${R2_URL}/stairs-and-railings/horizontal-balusters.webp`,
    alt: "Custom staircase with horizontal metal balusters",
    category: "Stairs and railings",
    width: 4032,
    height: 3024,
  },
  {
    src: `${R2_URL}/ceiling-beams/vaulted-truss-beams.webp`,
    alt: "Custom fireplace mantel with built-in side shelves",
    category: "Fireplace mantels",
    height: 4032,
    width: 3024,
  },
  {
    src: `${R2_URL}/wall-paneling-and-molding/chevron-wall.webp`,
    alt: "Custom chevron wall paneling",
    category: "Wall paneling and molding",
    width: 4032,
    height: 3024,
  },
  {
    src: `${R2_URL}/built-ins-and-storage/window-desk.webp`,
    alt: "Custom built-in desk beneath a window",
    category: "Built-ins and storage",
    width: 2688,
    height: 1520,
  },
];

export const aboutImage = {
  src: `${R2_URL}/kitchen-and-bath-cabinetry/bathroom-cabinets.webp`,
  alt: "Custom built-in plank bench",
  width: 1520,
  height: 2688,
};

export const ourWorkImages = [
  {
    id: "built-ins-storage",
    label: "Built-ins & Storage",
    src: `${R2_URL}/built-ins-and-storage/window-desk.webp`,
    alt: "Custom built-in desk beneath a window",
    width: 2688,
    height: 1520,
    href: "/gallery",
  },
  {
    id: "stairs-railings",
    label: "Stairs & Railings",
    src: `${R2_URL}/stairs-and-railings/horizontal-balusters.webp`,
    alt: "Custom staircase with horizontal metal balusters",
    width: 4032,
    height: 3024,
    href: "/gallery",
  },
  {
    id: "wall-paneling-molding",
    label: "Wall Paneling & Molding",
    src: `${R2_URL}/wall-paneling-and-molding/chevron-wall.webp`,
    alt: "Custom chevron wall paneling",
    width: 4032,
    height: 3024,
    href: "/gallery",
  },
  {
    id: "fireplace-mantels",
    label: "Fireplace Mantels",
    src: `${R2_URL}/fireplace-mantels/mantel-side-shelves.webp`,
    alt: "Custom fireplace mantel with built-in side shelves",
    width: 4032,
    height: 3024,
    href: "/gallery",
  },
];
