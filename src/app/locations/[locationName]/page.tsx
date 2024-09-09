import fs from "fs";
import path from "path";
import { Metadata } from "next";
import BasePage from "@/components/app/BasePage";
import { characterData } from "@/types/character";
import React from "react";
import SectionHeader from "@/components/base/SectionHeader";
import imageUrls from "@/constants/imageUrls";

interface LocationProps {
  params: {
    locationName: string;
  };
}

const LocationPage = async ({ params }: LocationProps) => {
  const { locationName } = params;
  const filePath = path.join(
    process.cwd(),
    "locations",
    `${locationName}.json`,
  );

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const locationsData: characterData = JSON.parse(
    fs.readFileSync(filePath, "utf-8"),
  );

  const renderHead = () => (
    <SectionHeader
      imageUrl={imageUrls[locationsData.imageUrl as keyof typeof imageUrls]}
      title={locationsData.title}
      subtitle={locationsData.subtitle}
    />
  );

  return (
    <BasePage
      data={locationsData}
      renderHead={renderHead}
    />
  );
};

export default LocationPage;

export async function generateStaticParams() {
  const locationsDir = path.join(process.cwd(), "locations");
  const files = fs.readdirSync(locationsDir);

  return files.map(filename => ({
    locationName: filename.replace(".json", ""),
  }));
}

export async function generateMetadata({
  params,
}: LocationProps): Promise<Metadata> {
  const id = params.locationName;
  const transformedName = id
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return {
    title: transformedName,
  };
}
