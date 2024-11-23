/* Global imports */
import React from "react";

/* Local imports */
import BasePage from "@/components/app/BasePage";
import LoadingError from "@/components/app/LoadingError";

/* TypeScript Interfaces */
interface DataPageProps {
  params: {
    ressource: string;
    data: string;
  };
}

/**
 * DataPage component fetches and displays data for any entity (event, character, etc.).
 *
 * @returns {JSX.Element} The rendered DataPage component.
 */
const DataPage = async ({ params }: DataPageProps) => {
  const { ressource, data } = params;

  // Fetch data from API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_LINK}/${ressource}/${data}`,
    {
      headers: {
        "X-API-Key": process.env.NEXT_PUBLIC_API_KEY ?? "",
      },
    },
  );

  if (!response.ok) {
    return (
      <LoadingError
        error="Failed to load data"
        loading={false}
      />
    );
  }

  const content = await response.json();

  return <BasePage data={content} />;
};

export default DataPage;

/**
 * Generates static paths for all resources and their data dynamically.
 */
export async function generateStaticParams() {
  // Step 1: Fetch the list of resources
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/assets`, {
    headers: {
      "X-API-Key": process.env.NEXT_PUBLIC_API_KEY ?? "",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch resource list");
  }

  const resourceData = await response.json();

  // Build resource list dynamically
  const ressourceList = resourceData.map(
    (item: { folder: string }) => item.folder,
  );

  // Step 2: Generate static params for each resource
  const staticParams = [];

  for (const ressource of ressourceList) {
    const ressourceResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_LINK}/${ressource}`,
      {
        headers: {
          "X-API-Key": process.env.NEXT_PUBLIC_API_KEY ?? "",
        },
      },
    );

    if (!ressourceResponse.ok) {
      console.error(`Failed to fetch data for resource: ${ressource}`);
      continue; // Skip this resource if fetching fails
    }

    const items = await ressourceResponse.json();

    // Append paths for each item in this resource
    staticParams.push(
      ...items.content.map((item: any) => ({
        ressource,
        data: item.title.toLowerCase().replace(/\s+/g, "_"), // Adjust as per API structure
      })),
    );
  }

  return staticParams;
}

/**
 * Generates metadata for an entity.
 * @param name The URL slug (e.g., "event_name").
 * @returns Metadata object.
 */
export function generateMetadata(data: string) {
  const transformedName = data;

  return { title: transformedName };
}
