import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/base/SectionTitle";
import SectionSubtitle from "@/components/base/SectionSubtitle";
import SectionContent from "@/components/base/SectionContent";
import SectionContainer from "@/components/base/SectionContainer";
import SectionImageContainer from "@/components/base/SectionImageContainer";
import SectionImage from "@/components/base/SectionImage";
import SectionHeadContainer from "@/components/base/SectionHeadContainer";
import SectionNavContainer from "@/components/base/SectionNavContainer";
import SectionNavLink from "@/components/base/SectionNavLink";
import SectionGallery from "@/components/base/SectionGallery";
import imageUrls from "@/constants/imageUrls";
import PronunciationButton from "@/components/app/PronunciationButton";
import keywordDictionary from "@/constants/keywordsDict";
import Link from "next/link";
import { PageData, Section } from "@/types/pageData";
import BasePageIntro from "./BasePage/PageIntro";

interface BasePageProps {
  data: PageData;
  renderHead: () => React.ReactNode;
}

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
    const url =
      keywordDictionary[
        keyword.toLowerCase() as keyof typeof keywordDictionary
      ];

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

const renderSections = (data: PageData, sections: Section[], depth = 0) => {
  return sections.map((section: Section) => (
    <React.Fragment key={section.id}>
      {section.id === "intro" || section.id === "about" ? (
        <>
          <BasePageIntro
            section={section}
            data={data}
            renderContent={renderContent}
          />
          {section.image && (
            <SectionImageContainer>
              <SectionImage
                alt={section.title}
                imageUrl={imageUrls[section.image as keyof typeof imageUrls]}
              />
            </SectionImageContainer>
          )}
        </>
      ) : (
        <SectionContainer
          id={section.id}
          title={section.title}
          depth={depth}
        >
          {depth === 0 ? (
            <SectionTitle title={section.title} />
          ) : (
            <SectionSubtitle title={section.title} />
          )}
          <SectionContent>{renderContent(section.content)}</SectionContent>
          {section.image && (
            <SectionImageContainer>
              <SectionImage
                alt={section.title}
                imageUrl={imageUrls[section.image as keyof typeof imageUrls]}
              />
            </SectionImageContainer>
          )}
          {section.subsections &&
            renderSections(data, section.subsections, depth + 1)}
          {section.gallery && <SectionGallery gallery={section.gallery} />}
        </SectionContainer>
      )}
    </React.Fragment>
  ));
};

const BasePage: React.FC<BasePageProps> = ({ data, renderHead }) => {
  return (
    <div>
      <main className="min-h-screen min-w-full bg-gray-100 text-black">
        <Navbar />
        {renderHead()}
        {data.sections ? (
          <>
            <SectionNavContainer>
              {data.sections.map((section: Section) => (
                <SectionNavLink
                  key={section.id}
                  href={`#${section.id}`}
                  title={section.title}
                />
              ))}
            </SectionNavContainer>
            <section className="py-10 px-4 flex items-center justify-center flex-col">
              {renderSections(data, data.sections)}
            </section>
          </>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default BasePage;
