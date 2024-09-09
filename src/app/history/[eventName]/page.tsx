import fs from "fs";
import path from "path";
import { Metadata } from "next";
import BasePage from "@/components/app/BasePage";
import { EventData } from "@/types/history";
import keywordDictionary from "@/constants/keywordsDict";
import Link from "next/link";
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

  const replaceKeywordsWithLinks = (text: string) => {
    const parts = [];
    let lastIndex = 0;

    const keywordRegex = new RegExp(
      `\\b(${Object.keys(keywordDictionary).join("|")})\\b(?![\\w-])`,
      "gi",
    );

    let match;

    while ((match = keywordRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }

      const keyword = match[0];
      const url = keywordDictionary[keyword as keyof typeof keywordDictionary];

      parts.push(
        <Link
          key={match.index}
          href={url}
          className="text-blue-600 hover:underline"
        >
          {keyword}
        </Link>,
      );
      lastIndex = keywordRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts;
  };

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <React.Fragment key={index}>
          {replaceKeywordsWithLinks(paragraph)}
          {index !== content.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      ));
    }
    return replaceKeywordsWithLinks(content);
  };

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
      renderContent={renderContent}
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
