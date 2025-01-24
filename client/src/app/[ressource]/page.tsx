/* Global imports */
/* Scoped imports */
/* Local imports */
import Characters from "@/components/pages/Characters";
import LoadingError from "@/components/app/LoadingError";
import HistoryEvents, { Event } from "@/components/app/HistoryEvents";
import { CharacterData } from "@/types/pageData";

// TypeScript Interface
interface RessourceProps {
  params: {
    ressource: string;
  };
}

type ContentType = Event | CharacterData;

type PageType = "timeline" | "img-cards-list";

interface ApiResponse {
  content: ContentType[];
  type: PageType;
}

/**
 * Fetches resource data from the API
 */
async function fetchRessource(ressourceName: string): Promise<ApiResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_LINK}/${ressourceName}`,
    {
      headers: {
        "X-API-Key": process.env.NEXT_PUBLIC_API_KEY ?? "",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch resource");
  }

  return response.json();
}

/**
 * RessourcePage component fetches and displays content based on the resource type.
 *
 * @returns {Promise<JSX.Element>} The rendered RessourcePage component.
 */
const RessourcePage = async ({
  params,
}: RessourceProps): Promise<JSX.Element> => {
  try {
    const { content, type: pageType } = await fetchRessource(params.ressource);

    if (pageType === "img-cards-list") {
      const characters = content as CharacterData[];
      return (
        <Characters
          characters={characters}
          endpoint={params.ressource}
        />
      );
    }

    if (pageType === "timeline") {
      const events = content as Event[];
      return <HistoryEvents events={events} />;
    }

    return <></>;
  } catch (error) {
    return (
      <LoadingError
        error={
          error instanceof Error ? error.message : "Unknown error occurred"
        }
        loading={false}
      />
    );
  }
};

export default RessourcePage;

// Helper Functions
export async function generateStaticParams() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_LINK}/assets`, {
    headers: {
      "X-API-Key": process.env.NEXT_PUBLIC_API_KEY ?? "",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch resource list");
  }

  const data = await response.json();

  return data.map((item: { folder: string; type: string }) => ({
    ressource: item.folder.toString(),
  }));
}
