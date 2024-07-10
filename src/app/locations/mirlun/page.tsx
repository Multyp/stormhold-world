/* Global imports */
import { Metadata } from "next";
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
import ImageLink from "@/components/ImageLink";

export const metadata: Metadata = {
  title: "Mirlun - Stormhold",
};

const Mirlun = () => {
  return (
    <div>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.mirlun})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Mirlun
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
                    Welcome to Mirlun
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
            <SectionTitle title="Welcome to Mirlun" />
            <SectionContent>
              Mirlun is an independent elven kingdom known for its ancient
              forests and mystical heritage. It operates under its own local
              governance but respects the laws set by THE GREAT ELDERS as a
              member state in the broader political entity of STORMHOLD.
            </SectionContent>
          </SectionHeadContainer>
          <SectionImageContainer>
            <SectionImage
              alt="Aerial view of Mirlun"
              imageUrl={imageUrls.mirlun}
            />
          </SectionImageContainer>
          <SectionContainer id="economy">
            <SectionSubtitle title="Economy" />
            <SectionContent>
              Mirlun{"'"}s economy thrives on exports such as clothes, elven
              crafts, and non-processed herbal medicines. In return, it imports
              technological goods and processed foods from other kingdoms,
              ensuring a balanced economic interdependence within STORMHOLD.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="politics">
            <SectionSubtitle title="Politics" />
            <SectionContent>
              Politically, Mirlun maintains autonomy in local matters like
              justice while adhering to the broader laws set by THE GREAT
              ELDERS. Its unique governance structure preserves its cultural
              identity while contributing to the stability of STORMHOLD.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="culture">
            <SectionSubtitle title="Culture" />
            <SectionContent>
              Visitors to Mirlun can immerse themselves in its mystical
              heritage, explore ancient forests, and participate in traditional
              elven ceremonies and festivals. The kingdom{"'"}s commitment to
              preserving its natural beauty and historical legacy makes it a
              captivating destination within STORMHOLD.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="royal-family">
            <SectionSubtitle title="The Royal Family" />
            <SectionContent>
              The royal family of Mirlun is deeply respected for their wisdom,
              magical prowess, and dedication to the well-being of the kingdom.
              Learn more about the members of the royal family:
            </SectionContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-screen-lg w-full">
              <ImageLink
                title="Elion MELITH"
                href="/characters/elion_melith"
                backgroundImage={imageUrls.elionMelith}
              />
              <ImageLink
                title="Aryndel MELITH"
                href="/characters/aryndel_melith"
                backgroundImage={imageUrls.aryndelMelith}
              />
              <ImageLink
                title="Typhania MELITH"
                href="/characters/typhania_melith"
                backgroundImage={imageUrls.typhaniaMelith}
              />
            </div>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mirlun;
