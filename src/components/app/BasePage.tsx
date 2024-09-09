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

interface BasePageProps {
  data: any;
  renderContent: (content: string | string[]) => React.ReactNode;
  renderHead: () => React.ReactNode;
}

const BasePage: React.FC<BasePageProps> = ({
  data,
  renderContent,
  renderHead,
}) => {
  return (
    <div>
      <main className="min-h-screen min-w-full bg-gray-100 text-black">
        <Navbar />
        {renderHead()}
        {data.sections ? (
          <>
            <SectionNavContainer>
              {data.sections.map((section: any) => (
                <SectionNavLink
                  key={section.id}
                  href={`#${section.id}`}
                  title={section.title}
                />
              ))}
            </SectionNavContainer>
            <section className="py-10 px-4 flex items-center justify-center flex-col">
              {data.sections.map((section: any) => (
                <React.Fragment key={section.id}>
                  {section.id === "intro" || section.id === "about" ? (
                    <>
                      <SectionHeadContainer id={section.id}>
                        <SectionTitle title={section.title} />
                        {data.pronunciation && (
                          <PronunciationButton
                            pronunciation={data.pronunciation}
                            name={data.title}
                          />
                        )}
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

export default BasePage;
