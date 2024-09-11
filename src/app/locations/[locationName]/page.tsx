import fs from "fs";
import path from "path";
import { Metadata } from "next";
import BasePage from "@/components/app/BasePage";
import { CharacterData } from "@/types/pageData";
import React from "react";

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

  const locationsData: CharacterData = JSON.parse(
    fs.readFileSync(filePath, "utf-8"),
  );

  return <BasePage data={locationsData} />;
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
