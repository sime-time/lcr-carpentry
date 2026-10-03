import { PUBLIC_R2_URL } from "$env/static/public";

const R2_URL = `${PUBLIC_R2_URL}/photos`;

export const heroImages = [
  {
    src: `${R2_URL}/stairs-and-railings/railings-polished.webp`,
    alt: "Custom railings with polished floor",
    width: 3024,
    height: 4032,
  },
  {
    src: `${R2_URL}/stairs-and-railings/IMG_0963.webp`,
    alt: "Custom spiral staircase",
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
  src: `${R2_URL}/stairs-and-railings/IMG_0963.webp`,
  alt: "Custom spiral stairs",
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
    href: "/gallery",
  },
  {
    id: "stairs-railings",
    label: "Stairs & Railings",
    src: `${R2_URL}/stairs-and-railings/white-post-cable-rail-stairs.webp`,
    alt: "Custom staircase with cables",
    width: 3024,
    height: 4032,
    href: "/gallery",
  },
  {
    id: "ceilings",
    label: "Ceilings",
    src: `${R2_URL}/ceilings/geometric-wood-ceiling-beams.webp`,
    alt: "Custom geometric ceiling with wood beams",
    width: 3024,
    height: 4032,
    href: "/gallery",
  },
  {
    id: "fireplace-mantels",
    label: "Fireplace Mantels",
    src: `${R2_URL}/fireplace-mantels/white-mantel-black-marble.webp`,
    alt: "Custom white fireplace mantel with black marble surround",
    width: 4032,
    height: 3024,
    href: "/gallery",
  },
];
