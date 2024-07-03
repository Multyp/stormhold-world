import Head from "next/head";
import Image from "next/image";
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

const Dawnfall = () => {
  return (
    <div>
      <Head>
        <title>Dawnfall - Stormhold</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.dawnfall})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Dawnfall
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
                    Welcome to Dawnfall
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
            <SectionTitle title="Welcome to Dawnfall" />
            <SectionContent>
              Dawnfall is a dwarven kingdom located in the northwest of
              STORMHOLD, built atop THE GREAT MINES, which are the primary
              source of stones and metals for the kingdom.
            </SectionContent>
          </SectionHeadContainer>
          <SectionImageContainer>
            <SectionImage
              alt="Aerial view of one of dawnfall's cities"
              imageUrl={imageUrls.dawnfall}
            />
          </SectionImageContainer>
          <SectionContainer id="economy">
            <SectionSubtitle title="Economy" />
            <SectionContent>
              Dawnfall contributes significantly to the economic structure of
              STORMHOLD by exporting ores such as iron, copper, and precious
              metals. In return, it imports processed food products like cheese
              and bread, along with medical supplies.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="politics">
            <SectionSubtitle title="Politics" />
            <SectionContent>
              Politically, Dawnfall is part of the alliance overseen by THE
              GREAT ELDERS, a governing body comprising three humans and three
              dwarfs. This alliance influences major decisions across STORMHOLD,
              particularly in the central city of GOLDENHALL.
            </SectionContent>
          </SectionContainer>
          <SectionContainer id="culture">
            <SectionSubtitle title="Culture" />
            <SectionContent>
              Dawnfall{"'"}s culture is deeply rooted in its mining traditions
              and craftsmanship. The kingdom celebrates its heritage through
              festivals and stories that honor its historical contributions to
              STORMHOLD.
            </SectionContent>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dawnfall;
