import imageUrls from "@/constants/imageUrls";

const locations = [
  {
    name: "LARIOM",
    description:
      "The human kingdom situated in the southwest of the continent, known for its strategic military positions and rich cultural history.",
    imageSrc: imageUrls.lariom,
    link: "/locations/lariom",
    tags: ["human", "kingdom"],
  },
  {
    name: "DAWNFALL",
    description:
      "A dwarven kingdom located in the northwest, built atop THE GREAT MINES which are the primary source of stones and metals for the kingdom.",
    imageSrc: imageUrls.dawnfall,
    link: "/locations/dawnfall",
    tags: ["dwarven", "kingdom"],
  },
  {
    name: "MIRLUN",
    description:
      "An independent elven kingdom known for its ancient forests and mystical heritage. Although it operates under its own local governance, it respects the laws set by THE GREAT ELDERS.",
    imageSrc: imageUrls.mirlun,
    link: "/locations/mirlun",
    tags: ["elven", "kingdom", "forest"],
  },
  {
    name: "SHUBORE",
    description:
      "A coastal city known for its bustling trade ports and vibrant cultural festivals. It serves as a major hub for commerce and cultural exchange in the southern region.",
    imageSrc: imageUrls.shubore,
    link: "/locations/shubore",
    tags: ["coastal", "kingdom"],
  },
  {
    name: "GOBLIN FORESTS",
    description:
      "Dense forests in the northeast, populated mostly by goblins and wolves, recognized as an independent region under goblin control.",
    imageSrc: imageUrls.goblinForests,
    link: "/locations/goblin_forests",
    tags: ["goblins", "forest"],
  },
];

export default locations;
