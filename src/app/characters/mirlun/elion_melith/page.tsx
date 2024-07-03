import Head from "next/head";
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

const ElionMelith = () => {
  return (
    <div>
      <Head>
        <title>Elion Melith - King of MIRLUN</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.elionMelith})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Elion Melith
              </h1>
              <p className="text-xl">King of MIRLUN</p>
            </div>
          </div>
        </header>
        <nav className="py-4 w-[100dvw] flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="bg-gray-100 shadow-md rounded-lg p-4">
              <ul className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-4">
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#about"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    About Elion Melith
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#appearance"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Physical Appearance
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#personality"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Personality
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#role"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Role in MIRLUN
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="py-10 px-4 flex items-center justify-center flex-col">
          <SectionHeadContainer id="about">
            <SectionTitle title="About Elion Melith" />
            <SectionContent>
              Elion Melith is the gentle and dignified king of MIRLUN, a realm
              known for its ancient forests and mystical heritage. Despite his
              serene demeanor, Elion places immense importance on physical
              appearance, striving to embody the ideal of eternal youth and
              beauty.
            </SectionContent>
          </SectionHeadContainer>
          <SectionImageContainer>
            <SectionImage
              alt="Elion Melith"
              imageUrl={imageUrls.elionMelith}
            />
          </SectionImageContainer>
          <SectionContainer id="appearance">
            <SectionSubtitle title="Physical Appearance" />
            <SectionContent>
              King Elion is a striking figure, with long, flowing green hair and
              vibrant emerald eyes that mirror the lush forests of MIRLUN. His
              regal attire is meticulously crafted, adorned with intricate
              designs and natural elements that reflect his kingdom{"'"}s close
              ties to nature. Elion{"'"}s appearance is further enhanced by his
              elegant jewelry, including a necklace with a luminescent gemstone
              and a crown interwoven with magical runes.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="personality">
            <SectionSubtitle title="Personality" />
            <SectionContent>
              Though he may appear vain, Elion{"'"}s concern for his appearance
              is matched by his genuine care for his kingdom and its people. His
              gentle and compassionate nature endears him to his subjects, and
              he is always willing to listen to their concerns and address their
              needs.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="role">
            <SectionSubtitle title="Role in MIRLUN" />
            <SectionContent>
              As the king, Elion plays a vital role in the governance of MIRLUN.
              He oversees the kingdom{"'"}s political affairs, represents MIRLUN
              in THE ELDER{"'"}S SENATE, and ensures the preservation of its
              cultural heritage. Elion{"'"}s leadership is characterized by his
              emphasis on beauty, harmony, and the well-being of his people.
            </SectionContent>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ElionMelith;
