import fs from "fs";
import path from "path";
import { Metadata } from "next";
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
import React from "react";

interface CharacterProps {
  params: {
    characterName: string;
  };
}

interface characterData {
  title: string;
  subtitle: string;
  imageUrl: string;
  tags: string[];
  sections?: {
    id: string;
    title: string;
    content: string | string[];
    image?: string;
    gallery?: [
      {
        url: string;
        alt: string;
      },
      {
        url: string;
        alt: string;
      },
      {
        url: string;
        alt: string;
      },
    ];
  }[];
}

const CharacterPage = async ({ params }: CharacterProps) => {
  const { characterName } = params;
  const filePath = path.join(process.cwd(), "history", `${characterName}.json`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const characterData: characterData = JSON.parse(
    fs.readFileSync(filePath, "utf-8"),
  );

  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((paragraph, index) => (
        <React.Fragment key={index}>
          {paragraph}
          {index !== content.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </React.Fragment>
      ));
    }
    return content;
  };

  return (
    <div>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <SectionHeader
          imageUrl={imageUrls[characterData.imageUrl as keyof typeof imageUrls]}
          title={characterData.title}
          subtitle={characterData.subtitle}
        />
        {characterData.sections ? (
          <>
            <SectionNavContainer>
              {characterData.sections.map(section => (
                <SectionNavLink
                  key={section.id}
                  href={`#${section.id}`}
                  title={section.title}
                />
              ))}
            </SectionNavContainer>
            <section className="py-10 px-4 flex items-center justify-center flex-col">
              {characterData.sections.map(section => (
                <>
                  {section.id === "about" ? (
                    <>
                      <SectionHeadContainer id={section.id}>
                        <SectionTitle title={section.title} />
                        <SectionContent>{section.content}</SectionContent>
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
                </>
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

export default CharacterPage;

export async function generateStaticParams() {
  const charactersDir = path.join(process.cwd(), "history");
  const files = fs.readdirSync(charactersDir);

  return files.map(filename => ({
    characterName: filename.replace(".json", ""),
  }));
}

export async function generateMetadata({
  params,
}: CharacterProps): Promise<Metadata> {
  const id = params.characterName;

  const transformedName = id
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return {
    title: transformedName,
  };
}
