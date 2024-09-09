import fs from "fs";
import path from "path";
import { Metadata } from "next";
import BasePage from "@/components/app/BasePage";
import { EventData } from "@/types/history";
import React from "react";
import SectionHeader from "@/components/base/SectionHeader";
import imageUrls from "@/constants/imageUrls";

interface EventProps {
  params: {
    eventName: string;
  };
}

const EventPage = async ({ params }: EventProps) => {
  const { eventName } = params;
  const filePath = path.join(process.cwd(), "history", `${eventName}.json`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const eventData: EventData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const renderHead = () => (
    <SectionHeader
      imageUrl={imageUrls.default}
      title={eventData.title}
      subtitle={eventData.subtitle}
    />
  );

  return (
    <BasePage
      data={eventData}
      renderHead={renderHead}
    />
  );
};

export default EventPage;

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
