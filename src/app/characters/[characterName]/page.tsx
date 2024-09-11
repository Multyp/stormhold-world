// pages/characters/[characterName].tsx
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import BasePage from "@/components/app/BasePage";
import { CharacterData } from "@/types/pageData";
import React from "react";

interface CharacterProps {
  params: {
    characterName: string;
  };
}

const CharacterPage = async ({ params }: CharacterProps) => {
  const { characterName } = params;
  const filePath = path.join(
    process.cwd(),
    "characters",
    `${characterName}.json`,
  );

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const characterData: CharacterData = JSON.parse(
    fs.readFileSync(filePath, "utf-8"),
  );

  return <BasePage data={characterData} />;
};

export default CharacterPage;

export async function generateStaticParams() {
  const charactersDir = path.join(process.cwd(), "characters");
  const files = fs.readdirSync(charactersDir);

  return files.map(filename => ({
    characterName: filename.replace(".json", ""),
  }));
}

export async function generateMetadata({
  params,
}: CharacterProps): Promise<Metadata> {
  const id = params.characterName;
  const transformedName = id
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return {
    title: transformedName,
  };
}
