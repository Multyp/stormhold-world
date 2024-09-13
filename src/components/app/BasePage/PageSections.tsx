// React and Next.js
import React from "react";

// Components
import SectionTitle from "@/components/base/SectionTitle";
import SectionSubtitle from "@/components/base/SectionSubtitle";
import SectionContent from "@/components/base/SectionContent";
import SectionContainer from "@/components/base/SectionContainer";
import SectionImageContainer from "@/components/base/SectionImageContainer";
import SectionImage from "@/components/base/SectionImage";
import SectionGallery from "@/components/base/SectionGallery";
import BasePageIntro from "@/components/app/BasePage/PageIntro";
import BasePageIntroImage from "@/components/app/BasePage/PageIntroImage";

// Constants
import imageUrls from "@/constants/imageUrls";

// Types
import type { PageData, Section } from "@/types/pageData";
import PageSectionsContent from "./PageSectionsContent";

const renderSections = (data: PageData, sections: Section[], depth = 0) => {
  return sections.map((section: Section) => (
    <React.Fragment key={section.id}>
      {section.id === "intro" || section.id === "about" ? (
        <>
          <BasePageIntro
            section={section}
            data={data}
          />
          {section.image && (
            <BasePageIntroImage
              title={section.title}
              image={section.image}
            />
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
          <SectionContent>
            <PageSectionsContent content={section.content} />
          </SectionContent>
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

export default function PageSections({
  data,
  sections,
}: {
  data: PageData;
  sections: Section[];
}) {
  return <>{renderSections(data, sections)}</>;
}
