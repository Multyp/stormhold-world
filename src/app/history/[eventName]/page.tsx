// External Modules
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import React from "react";

// Components
import BasePage from "@/components/app/BasePage";

// Types
import type { EventData } from "@/types/pageData";

// TypeScript Interface
interface EventProps {
  params: {
    eventName: string;
  };
}

// Main Component
const EventPage = async ({ params }: EventProps) => {
  const { eventName } = params;
  const filePath = path.join(process.cwd(), "history", `${eventName}.json`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const eventData: EventData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  return <BasePage data={eventData} />;
};

export default EventPage;

// Helper Functions
export async function generateStaticParams() {
  const eventsDir = path.join(process.cwd(), "history");
  const files = fs.readdirSync(eventsDir);

  return files.map(filename => ({
    eventName: filename.replace(".json", ""),
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
