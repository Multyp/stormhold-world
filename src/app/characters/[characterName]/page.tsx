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
import Image from "next/image";
import imageUrls from "@/constants/imageUrls";
import React from "react";

interface CharacterProps {
  params: {
    characterName: string;
  };
}

const CharacterPage = async ({ params }: CharacterProps) => {
  const { characterName } = params;
  const filePath = path.join(
    process.cwd(),
    "characters",
    `${characterName}.json`,
  );

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const characterData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

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
              {characterData.sections.map((section: any) => (
                <SectionNavLink
                  key={section.id}
                  href={`#${section.id}`}
                  title={section.title}
                />
              ))}
            </SectionNavContainer>
            <section className="py-10 px-4 flex items-center justify-center flex-col">
              {characterData.sections.map((section: any) => (
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
                        <div className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
                          <div className="grid grid-cols-2 gap-4 mt-4 max-h-96 h-full">
                            <div className="relative col-span-1">
                              <Image
                                src={
                                  imageUrls[
                                    section.gallery[0]
                                      .url as keyof typeof imageUrls
                                  ]
                                }
                                alt={section.gallery[0].alt}
                                className="w-full max-h-96 object-cover rounded-md"
                                style={{ height: "100%" }}
                                width={0}
                                height={0}
                              />
                              <div className="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded-lg opacity-75">
                                AI Generated
                              </div>
                            </div>
                            <div className="grid grid-rows-2 gap-4">
                              {section.gallery
                                .slice(1)
                                .map((image: any, index: number) => (
                                  <div
                                    key={index}
                                    className="relative rounded-md overflow-hidden"
                                  >
                                    <Image
                                      src={
                                        imageUrls[
                                          image.url as keyof typeof imageUrls
                                        ]
                                      }
                                      alt={image.alt}
                                      className="w-full max-h-44 object-cover rounded-md"
                                      style={{ height: "auto" }}
                                      width={0}
                                      height={0}
                                    />
                                    <div className="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded-lg opacity-75">
                                      AI Generated
                                    </div>
                                  </div>
                                ))}
                            </div>{" "}
                          </div>
                        </div>
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
  const charactersDir = path.join(process.cwd(), "characters");
  const files = fs.readdirSync(charactersDir);

  return files.map(filename => ({
    characterName: filename.replace(".json", ""),
  }));
}

export async function generateMetadata({
  params,
}: CharacterProps): Promise<Metadata> {
  // read route params
  const id = params.characterName;

  // fetch data
  const transformedName = id
    .split("_") // Split the string by underscore
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");

  return {
    title: transformedName,
  };
}
