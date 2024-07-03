/* Global imports */
import Head from "next/head";
/* Scoped imports */
/* Local imports */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";
import SectionTitle from "@/components/base/SectionTitle";
import SectionSubtitle from "@/components/base/SectionSubtitle";
import SectionContent from "@/components/base/SectionContent";
import SectionContainer from "@/components/base/SectionContainer";
import SectionImageContainer from "@/components/base/SectionImageContainer";
import SectionImage from "@/components/base/SectionImage";
import SectionHeadContainer from "@/components/base/SectionHeadContainer";

const GoblinForests = () => {
  return (
    <div>
      <Head>
        <title>Goblin Forests - Stormhold</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.goblinForests})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Goblin Forests
              </h1>
            </div>
          </div>
        </header>
        <nav className="py-4 w-[100dvw] flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="bg-gray-100 shadow-md rounded-lg p-4">
              <ul className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-4">
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#explore"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Explore the Goblin Forests
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#autonomy"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Governance and Autonomy
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#culture"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Cultural Heritage
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="py-10 px-4 flex items-center justify-center flex-col">
          <SectionHeadContainer id="explore">
            <SectionTitle title="Explore the Goblin Forests" />
            <SectionContent>
              The Goblin Forests, located in the southeastern part of Stormhold,
              are dense and populated mostly by goblins and wolves. This region
              is recognized as an independent territory under goblin control.
            </SectionContent>
          </SectionHeadContainer>
          <SectionImageContainer>
            <SectionImage
              alt="Aerial view of Goblin Forests"
              imageUrl={imageUrls.goblinForests}
            />
          </SectionImageContainer>
          <SectionContainer id="autonomy">
            <SectionSubtitle title="Governance and Autonomy" />
            <SectionContent>
              Governed independently, the Goblin Forests have been granted
              autonomy but are required to stay out of Goldenhall politics and
              refrain from attacking borders of other kingdoms within Stormhold.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="culture">
            <SectionSubtitle title="Cultural Heritage" />
            <SectionContent>
              Despite their isolation, the goblins have a rich cultural heritage
              and unique traditions. They maintain their own governance and
              societal structure within the dense forests, contributing to the
              diverse tapestry of Stormhold{"'"}s political landscape.
            </SectionContent>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GoblinForests;
