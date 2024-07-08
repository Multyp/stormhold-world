import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Characters from "@/components/Characters"; // Import the client component
import { Character } from "@/types/character";

export const metadata: Metadata = {
  title: "Characters - Discover the People",
};

const getAllCharacters = (): Character[] => {
  const charactersDir = path.join(process.cwd(), "characters");
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
