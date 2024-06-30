const imageUrls = {
  default:
    process.env.NEXT_PUBLIC_IMAGE_URL_DEFAULT ||
    "/stormhold-world/assets/UNKNOWN.jpg",

  /*
    LOCATIONS
  */
  lariom:
    process.env.NEXT_PUBLIC_IMAGE_URL_LARIOM ||
    "/stormhold-world/assets/LARIOM.webp",
  dawnfall:
    process.env.NEXT_PUBLIC_IMAGE_URL_DAWNFALL ||
    "/stormhold-world/assets/DAWNFALL.webp",
  mirlun:
    process.env.NEXT_PUBLIC_IMAGE_URL_MIRLUN ||
    "/stormhold-world/assets/MIRLUN.webp",
  shubore:
    process.env.NEXT_PUBLIC_IMAGE_URL_SHUBORE ||
    "/stormhold-world/assets/SHUBORE.webp",
  stormhold:
    process.env.NEXT_PUBLIC_IMAGE_URL_STORMHOLD ||
    "/stormhold-world/assets/STORMHOLD.webp",
  goblinForests:
    process.env.NEXT_PUBLIC_IMAGE_URL_GOBLIN_FORESTS ||
    "/stormhold-world/assets/GOBLIN_FORESTS.webp",

  /*
    CHARACTERS
  */
  typhaniaMelith:
    process.env.NEXT_PUBLIC_IMAGE_URL_TYPHANIA_MELITH ||
    "/stormhold-world/assets/characters/Mirlun/typhania_melith.webp",
  elianaShoner:
    process.env.NEXT_PUBLIC_IMAGE_URL_ELIANA_SHONER ||
    "/stormhold-world/assets/characters/Shubore/eliana_shoner.webp",
};

export default imageUrls;
