/* Global imports */
import React from "react";

/* Local imports */
import BasePage from "@/components/app/BasePage";
import { EventData } from "@/types/pageData";
import dataUrls from "@/constants/dataUrls";
import LoadingError from "@/components/app/LoadingError";
import { Metadata } from "next";

/* TypeScript Interface */
interface EventProps {
  params: {
    eventName: string;
  };
}

/**
 * EventPage component fetches and displays event data based on the event name.
 *
 * @returns {JSX.Element} The rendered EventPage component.
 */
const EventPage = async ({ params }: EventProps) => {
  const { eventName } = params;

  // Fetch event data from API
  const response = await fetch(`${dataUrls.history}/${eventName}`, {
    headers: {
      "X-API-Key": process.env.NEXT_PUBLIC_API_KEY ?? "",
    },
  });

  if (!response.ok) {
    return (
      <LoadingError
        error="Failed to load event data"
        loading={false}
      />
    );
  }

  const eventData: EventData = await response.json();

  return <BasePage data={eventData} />;
};

export default EventPage;

// Helper Functions
export async function generateStaticParams() {
  const response = await fetch(`${dataUrls.history}`, {
    headers: {
      "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
        ? process.env.NEXT_PUBLIC_API_KEY
        : "",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch character list");
  }

  const characters: EventData[] = await response.json();

  console.log(
    characters.map(event => ({
      characterName: event.title
        .toLowerCase() // Convert to lowercase
        .split(" ") // Split by spaces
        .join("_"), // Join the rest with underscores // Adjust as necessary based on your API structure
    })),
  );

  return characters.map(event => ({
    eventName: event.title
      .toLowerCase() // Convert to lowercase
      .split(" ") // Split by spaces
      .join("_"), // Join the rest with underscores // Adjust as necessary based on your API structure, // Adjust as necessary based on your API structure
  }));
}
export async function generateMetadata({
  params,
}: EventProps): Promise<Metadata> {
  const id = params.eventName;
  const transformedName = id
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return {
    title: transformedName,
  };
}
