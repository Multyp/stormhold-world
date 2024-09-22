// External Modules
import React from "react";
import { Metadata } from "next";

// Components
import BasePage from "@/components/app/BasePage";

// Types
import type { CharacterData } from "@/types/pageData";
import dataUrls from "@/constants/dataUrls";

// TypeScript Interface
interface CharacterProps {
  params: {
    characterName: string;
  };
}

// Main Component
const CharacterPage = async ({ params }: CharacterProps) => {
  const { characterName } = params;
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  // Fetch character data from API
  const response = await fetch(`${dataUrls.characters}/${characterName}`, {
    headers: {
      "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
        ? process.env.NEXT_PUBLIC_API_KEY
        : "",
    },
  });

  if (!response.ok) {
    return { notFound: true };
  }

  const characterData: CharacterData = await response.json();

  return <BasePage data={characterData} />;
};

export default CharacterPage;

// Helper Functions
export async function generateStaticParams() {
  const response = await fetch(`${dataUrls.characters}`, {
    headers: {
      "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
        ? process.env.NEXT_PUBLIC_API_KEY
        : "",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch character list");
  }

  const characters: CharacterData[] = await response.json();

  return characters.map(character => ({
    characterName: character.title.toLowerCase().replace(" ", "_"), // Adjust as necessary based on your API structure
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
