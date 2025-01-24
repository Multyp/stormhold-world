// React
import React from "react";

// Components
import SectionNavContainer from "@/components/base/SectionNavContainer";
import SectionHeader from "@/components/base/SectionHeader";

// BasePage Components
import PageSections from "@/components/app/BasePage/PageSections";
import PageSectionNavLinks from "@/components/app/BasePage/PageSectionsNav";

// Constants
import imageUrls from "@/constants/imageUrls";

// Types
import type { PageData, Section } from "@/types/pageData";
import Layout from "@/layout";

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
    <Layout>
      {renderHead(data.title, data.subtitle, data.imageUrl)}
      {data.sections ? (
        <>
          <PageSectionNavLinks sections={data.sections} />
          <section className="py-10 px-4 flex items-center justify-center flex-col">
            <PageSections
              data={data}
              sections={data.sections}
            />
          </section>
        </>
      ) : null}
    </Layout>
  );
};

export default BasePage;
