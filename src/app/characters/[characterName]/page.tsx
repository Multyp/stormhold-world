// pages/characters/[characterName].tsx
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import BasePage from "@/components/app/BasePage";
import { characterData } from "@/types/character";
import React from "react";
import SectionHeader from "@/components/base/SectionHeader";
import imageUrls from "@/constants/imageUrls";

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

  const characterData: characterData = JSON.parse(
    fs.readFileSync(filePath, "utf-8"),
  );

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          {index !== content.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      ));
    }
    return content;
  };

  const renderHead = () => (
    <SectionHeader
      imageUrl={imageUrls[characterData.imageUrl as keyof typeof imageUrls]}
      title={characterData.title}
      subtitle={characterData.subtitle}
    />
  );

  return (
    <BasePage
      data={characterData}
      renderContent={renderContent}
      renderHead={renderHead}
    />
  );
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
