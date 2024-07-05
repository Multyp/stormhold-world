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
import SectionHeader from "@/components/base/SectionHeader";

export const metadata: Metadata = {
  title: "Aryndel Melith - Queen of MIRLUN",
};

const AryndelMelith = () => {
  return (
    <div>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <SectionHeader
          title="Aryndel Melith"
          subtitle="Queen of MIRLUN"
          imageUrl={imageUrls.aryndelMelith}
        />
        <nav className="py-4 w-[100dvw] flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="bg-gray-100 shadow-md rounded-lg p-4">
              <ul className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-4">
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#about"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    About Aryndel Melith
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
            <SectionTitle title="About Aryndel Melith" />
            <SectionContent>
              Aryndel Melith is celebrated for her unwavering dedication to
              charity and her hands-on approach to aiding her people. Rarely
              seen within the confines of the royal castle, Aryndel spends most
              of her time among the citizens of MIRLUN, offering help and
              support wherever it is needed.
            </SectionContent>
          </SectionHeadContainer>
          <SectionImageContainer>
            <SectionImage
              alt="Aryndel Melith"
              imageUrl={imageUrls.aryndelMelith}
            />
          </SectionImageContainer>
          <SectionContainer id="appearance">
            <SectionSubtitle title="Physical Appearance" />
            <SectionContent>
              Aryndel possesses an ethereal beauty, characterized by her flowing
              green hair adorned with delicate floral elements and vibrant
              emerald eyes that reflect her deep connection to nature. Her regal
              attire is a blend of elegance and simplicity, featuring intricate
              designs that symbolize her charitable endeavors. She wears
              enchanted jewelry that subtly enhances her magical abilities,
              including a crown interwoven with leaves and gemstones.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="personality">
            <SectionSubtitle title="Personality" />
            <SectionContent>
              Known for her warm and approachable nature, Aryndel is beloved by
              her people. Her deep empathy and genuine desire to help others
              make her an inspirational figure in MIRLUN, often seen as the
              heart of the kingdom.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="role">
            <SectionSubtitle title="Role in MIRLUN" />
            <SectionContent>
              As queen, Aryndel{"'"}s primary focus is on the welfare of MIRLUN
              {"'"}s citizens. She leads numerous charitable initiatives and
              works closely with local communities to address their needs. In
              addition to her public role, Aryndel{"'"}s hidden prowess in
              enchantment makes her a powerful ally and a protective force for
              the kingdom.
            </SectionContent>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AryndelMelith;
