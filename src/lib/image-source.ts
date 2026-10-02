import { PUBLIC_R2_URL } from "$env/static/public";

const R2_URL = `${PUBLIC_R2_URL}/photos`;

export const heroImages = [
  {
    src: `${R2_URL}/stairs-and-railings/cable-stairs.webp`,
    alt: "Custom staircase with cable railings",
    category: "Stairs and railings",
    width: 4032,
    height: 3024,
  },
  {
    src: `${R2_URL}/ceilings/vaulted-truss-beams.webp`,
    alt: "Custom vaulted ceiling with timber truss beams",
    category: "Ceilings",
    width: 4032,
    height: 3024,
  },
  {
    src: `${R2_URL}/walls-and-trim/chevron-wall.webp`,
    alt: "Custom chevron wall paneling",
    category: "Walls and trim",
    width: 4032,
    height: 3024,
  },
  {
    src: `${R2_URL}/built-ins-and-cabinets/gray-kitchen.webp`,
    alt: "Custom gray kitchen cabinetry",
    category: "Built-ins and cabinets",
    width: 4032,
    height: 3024,
  },
];

export const aboutImage = {
  src: `${R2_URL}/built-ins-and-cabinets/built-in-bookcase.webp`,
  alt: "Custom floor-to-ceiling built-in bookcase",
  width: 4032,
  height: 3024,
};

export const ourWorkImages = [
  {
    id: "built-ins-and-cabinets",
    label: "Built-ins & Cabinets",
    src: `${R2_URL}/built-ins-and-cabinets/built-in-bookcase.webp`,
    alt: "Custom floor-to-ceiling built-in bookcase",
    width: 4032,
    height: 3024,
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
    id: "walls-and-trim",
    label: "Walls & Trim",
    src: `${R2_URL}/walls-and-trim/chevron-wall.webp`,
    alt: "Custom chevron wall paneling",
    width: 4032,
    height: 3024,
    href: "/gallery",
  },
  {
    id: "fireplace-mantels",
    label: "Fireplace Mantels",
    src: `${R2_URL}/fireplace-mantels/paneled-fireplace.webp`,
    alt: "Custom fireplace mantel with built-in side shelves",
    width: 4032,
    height: 3024,
    href: "/gallery",
  },
];
