/* Global imports */
import fs from "fs";
import path from "path";
import { Metadata } from "next";
/* Scoped imports */
/* Local imports */
import { Character } from "@/types/character";
import Locations from "@/components/Locations";

export const metadata: Metadata = {
  title: "Locations - Discover the People",
};

const getAllLocations = (): Character[] => {
  const locationsDir = path.join(process.cwd(), "locations");
  const filenames = fs.readdirSync(locationsDir);
  const locations = filenames.map(filename => {
    const filePath = path.join(locationsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const character = JSON.parse(fileContents);
    character.link = `/locations/${filename.replace(".json", "")}`;
    return character;
  });
  return locations;
};

const LocationsPage = () => {
  const locations = getAllLocations();
  return <Locations characters={locations} />;
};

export default LocationsPage;
