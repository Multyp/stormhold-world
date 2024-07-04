/* Global imports */
import Head from "next/head";
import Link from "next/link";
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
import SectionHeader from "@/components/base/SectionHeader";

const TyphaniaMelith = () => {
  return (
    <div>
      <Head>
        <title>Typhania Melith - Princess of MIRLUN</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <SectionHeader
          imageUrl={imageUrls.typhaniaMelith}
          title="Typhania Melith"
          subtitle="Princess and Enchantress of MIRLUN"
        />
        <nav className="py-4 w-[100dvw] flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="bg-gray-100 shadow-md rounded-lg p-4">
              <ul className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-4">
                <li className="w-full md:w-auto text-center">
                  <Link
                    href="#about"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    About Typhania Melith
                  </Link>
                </li>
                <li className="w-full md:w-auto text-center">
                  <Link
                    href="#appearance"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Physical Appearance
                  </Link>
                </li>
                <li className="w-full md:w-auto text-center">
                  <Link
                    href="#personality"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Personality
                  </Link>
                </li>
                <li className="w-full md:w-auto text-center">
                  <Link
                    href="#abilities"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Magical Abilities
                  </Link>
                </li>
                <li className="w-full md:w-auto text-center">
                  <Link
                    href="#role"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Role in MIRLUN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="py-10 px-4 flex items-center justify-center flex-col">
          <SectionHeadContainer id="about">
            <SectionTitle title="About Typhania Melith" />
            <SectionContent>
              Typhania Melith is the beloved princess of MIRLUN, a kingdom known
              for its ancient forests and mystical heritage. Born into the royal
              family, Typhania has been trained in the arts of enchantment and
              nature magic from a young age.
            </SectionContent>
          </SectionHeadContainer>
          <SectionImageContainer>
            <SectionImage
              alt="Typhania Melith"
              imageUrl={imageUrls.typhaniaMelith}
            />
          </SectionImageContainer>
          <SectionContainer id="appearance">
            <SectionSubtitle title="Physical Appearance" />
            <SectionContent>
              Typhania has long, flowing green hair and vibrant emerald eyes
              that reflect her deep connection with nature. Her pointed ears and
              ethereal beauty are characteristic of her elven heritage. She
              wears regal, flowing robes adorned with enchanted jewelry that
              enhances her magical abilities.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="personality">
            <SectionSubtitle title="Personality" />
            <SectionContent>
              Known for her compassion and wisdom, Typhania is deeply loved by
              her people. She has an innate love for nature and spends much of
              her time in the ancient forests of MIRLUN, tending to the flora
              and fauna. Her deep knowledge of magic and nature makes her a wise
              and insightful leader.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="abilities">
            <SectionSubtitle title="Magical Abilities" />
            <SectionContent>
              As a master enchantress, Typhania specializes in spells that
              enhance, protect, and heal. Her enchantments are intricate and
              potent, often requiring deep concentration and knowledge. She has
              a deep connection with the natural world, allowing her to
              manipulate plants, communicate with animals, and heal the land.
              Despite her lack of physical strength, her control over elements
              such as water and earth makes her a formidable opponent.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="role">
            <SectionSubtitle title="Role in MIRLUN" />
            <SectionContent>
              As the princess, Typhania plays a crucial role in the governance
              of MIRLUN. She represents her people in diplomatic matters and
              ensures the kingdom{"'"}s traditions and values are upheld. She is
              also the foremost guardian of MIRLUN{"'"}s ancient forests, using
              her magic to protect the land from threats.
            </SectionContent>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TyphaniaMelith;
