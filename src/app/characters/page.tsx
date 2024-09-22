"use client";

/* Global imports */
import { useEffect, useState } from "react";

/* Scoped imports */
/* Local imports */
import Characters from "@/components/pages/Characters";
import { Character } from "@/types/character";
import dataUrls from "@/constants/dataUrls";
import { Metadata } from "next";
import LoadingError from "@/components/app/LoadingError";

/**
 * CharactersPage component fetches and displays a list of characters.
 * It handles loading and error states during the fetch process.
 *
 * @returns {JSX.Element} The rendered CharactersPage component.
 */
const CharactersPage = (): JSX.Element => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  /**
   * Fetch characters from the API on component mount.
   */
  useEffect(() => {
    const fetchCharacters = async (): Promise<void> => {
      try {
        const response = await fetch(dataUrls.characters, {
          headers: {
            "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
              ? process.env.NEXT_PUBLIC_API_KEY
              : "",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch characters");
        }
        const data: Character[] = await response.json();
        setCharacters(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  // Render loading state
  if (loading)
    return (
      <LoadingError
        error={error}
        loading={true}
      />
    );

  // Render error state
  if (error)
    return (
      <LoadingError
        error={error}
        loading={false}
      />
    );

  // Render characters once loaded
  return <Characters characters={characters} />;
};

export default CharactersPage;
