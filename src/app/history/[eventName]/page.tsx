/* Global imports */
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import React from "react";
/* Scoped imports */
/* Local imports */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/base/SectionTitle";
import SectionSubtitle from "@/components/base/SectionSubtitle";
import SectionContent from "@/components/base/SectionContent";
import SectionContainer from "@/components/base/SectionContainer";
import SectionImageContainer from "@/components/base/SectionImageContainer";
import SectionImage from "@/components/base/SectionImage";
import SectionHeadContainer from "@/components/base/SectionHeadContainer";
import SectionHeader from "@/components/base/SectionHeader";
import SectionNavContainer from "@/components/base/SectionNavContainer";
import SectionNavLink from "@/components/base/SectionNavLink";
import SectionGallery from "@/components/base/SectionGallery";
import imageUrls from "@/constants/imageUrls";
import { EventData } from "@/types/history";
import keywordDictionary from "@/constants/keywordsDict";
import Link from "next/link";

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

    // Use a regex to find keywords, including those followed by punctuation
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
          {renderParagraph(paragraph)}
          {index !== content.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      ));
    }
    return renderParagraph(content);
  };

  // Function to handle rendering of each paragraph
  const renderParagraph = (paragraph: string) => {
    return <>{replaceKeywordsWithLinks(paragraph)}</>;
  };

  return (
    <div>
      <main className="min-h-screen min-w-full bg-gray-100 text-black">
        <Navbar />
        <SectionHeader
          imageUrl={imageUrls.default}
          title={eventData.title}
          subtitle={eventData.subtitle}
        />
        {eventData.sections ? (
          <>
            <SectionNavContainer>
              {eventData.sections.map(section => (
                <SectionNavLink
                  key={section.id}
                  href={`#${section.id}`}
                  title={section.title}
                />
              ))}
            </SectionNavContainer>
            <section className="py-10 px-4 flex items-center justify-center flex-col">
              {eventData.sections.map(section => (
                <React.Fragment key={section.id}>
                  {section.id === "intro" ? (
                    <>
                      <SectionHeadContainer id={section.id}>
                        <SectionTitle title={section.title} />
                        <SectionContent>
                          {renderContent(section.content)}
                        </SectionContent>
                      </SectionHeadContainer>
                      {section.image && (
                        <SectionImageContainer>
                          <SectionImage
                            alt={section.title}
                            imageUrl={
                              imageUrls[section.image as keyof typeof imageUrls]
                            }
                          />
                        </SectionImageContainer>
                      )}
                    </>
                  ) : (
                    <SectionContainer id={section.id}>
                      <SectionSubtitle title={section.title} />
                      <SectionContent>
                        {renderContent(section.content)}
                      </SectionContent>
                      {section.gallery && (
                        <SectionGallery gallery={section.gallery} />
                      )}
                    </SectionContainer>
                  )}
                </React.Fragment>
              ))}
            </section>
          </>
        ) : (
          ""
        )}
      </main>
      <Footer />
    </div>
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
