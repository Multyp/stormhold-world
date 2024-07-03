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

const Lariom = () => {
  return (
    <div>
      <Head>
        <title>Lariom - Stormhold</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.lariom})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Lariom
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
                    href="#welcome"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Welcome to Lariom
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#economy"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Economy
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#politics"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Politics
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#culture"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Culture
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="py-10 px-4 flex items-center justify-center flex-col">
          <SectionHeadContainer id="welcome">
            <SectionTitle title="Welcome to Lariom" />
            <SectionContent>
              Lariom is a place of wonder and mystery. Explore the rich history,
              vibrant culture, and breathtaking landscapes that make Lariom a
              unique destination.
            </SectionContent>
          </SectionHeadContainer>
          <SectionImageContainer>
            <SectionImage
              alt="Aerial view of Lariom"
              imageUrl={imageUrls.lariom}
            />
          </SectionImageContainer>
          <SectionContainer id="economy">
            <SectionSubtitle title="Economy" />
            <SectionContent>
              Lariom is known for exporting processed agricultural products and
              medicinal goods, which are highly valued across the continent. In
              return, it imports various ores essential for tool and weapon
              manufacturing, primarily sourced from the dwarven kingdom of
              DAWNFALL.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="politics">
            <SectionSubtitle title="Politics" />
            <SectionContent>
              Politically, Lariom is part of the alliance overseen by THE ELDER
              {"'"}S SENATE, a governing body consisting of representatives from
              LARIOM, DAWNFALL, MIRLUN, and SHUBORE. The political hub of
              STORMHOLD is the central city of GOLDENHALL, where major political
              decisions and alliances are formed.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="culture">
            <SectionSubtitle title="Culture" />
            <SectionContent>
              The cultural heritage of Lariom is rich and diverse. The kingdom
              is renowned for its military traditions and historical
              significance. Visitors can explore ancient fortresses, participate
              in traditional festivals, and learn about the storied past of this
              vibrant kingdom.
            </SectionContent>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Lariom;
