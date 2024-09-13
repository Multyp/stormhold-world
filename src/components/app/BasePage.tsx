// React
import React from "react";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionNavContainer from "@/components/base/SectionNavContainer";
import SectionHeader from "@/components/base/SectionHeader";

// BasePage Components
import PageSections from "@/components/app/BasePage/PageSections";
import PageSectionNavLinks from "@/components/app/BasePage/PageSectionsNav";

// Constants
import imageUrls from "@/constants/imageUrls";

// Types
import type { PageData, Section } from "@/types/pageData";

interface BasePageProps {
  data: PageData;
}

const renderHead = (
  title: string,
  subtitle: string,
  imageUrl: string = "default",
) => (
  <SectionHeader
    imageUrl={imageUrls[imageUrl as keyof typeof imageUrls]}
    title={title}
    subtitle={subtitle}
  />
);

const BasePage: React.FC<BasePageProps> = ({ data }) => {
  return (
    <div>
      <main className="min-h-screen min-w-full bg-gray-100 text-black">
        <Navbar />
        {renderHead(data.title, data.subtitle, data.imageUrl)}
        {data.sections ? (
          <>
            <SectionNavContainer>
              {data.sections.map((section: Section) => (
                <PageSectionNavLinks
                  key={section.id}
                  section={section}
                />
              ))}
            </SectionNavContainer>
            <section className="py-10 px-4 flex items-center justify-center flex-col">
              <PageSections
                data={data}
                sections={data.sections}
              />
            </section>
          </>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default BasePage;
