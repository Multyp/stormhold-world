/* Global imports */
import fs from "fs";
import path from "path";
import { Metadata } from "next";
/* Scoped imports */
/* Local imports */
import Characters from "@/components/Characters";
import { Character } from "@/types/character";
import dataUrls from "@/constants/dataUrls";

export const metadata: Metadata = {
  title: "Characters - Discover the People",
};

const getAllCharacters = (): Character[] => {
  const charactersDir = path.join(process.cwd(), dataUrls.characters);
  const filenames = fs.readdirSync(charactersDir);
  const characters = filenames.map(filename => {
    const filePath = path.join(charactersDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const character = JSON.parse(fileContents);
    character.link = `/characters/${filename.replace(".json", "")}`;
    return character;
  });
  return characters;
};

const CharactersPage = () => {
  const characters = getAllCharacters();
  return <Characters characters={characters} />;
};

export default CharactersPage;
