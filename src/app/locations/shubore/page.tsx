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

const Shubore = () => {
  return (
    <div>
      <Head>
        <title>Shubore - Stormhold</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.shubore})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Shubore
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
                    Welcome to Shubore
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
            <SectionTitle title="Welcome to Shubore" />
            <SectionContent>
              Shubore is a snowy maritime kingdom located in the northeast of
              Stormhold, renowned for its mastery of icy waters and naval
              prowess. It is a crucial hub for maritime trade and defense,
              maintaining alliances with neighboring kingdoms.
            </SectionContent>
          </SectionHeadContainer>
          <SectionImageContainer>
            <SectionImage
              alt="Aerial view of Shubore"
              imageUrl={imageUrls.shubore}
            />
          </SectionImageContainer>
          <SectionContainer id="economy">
            <SectionSubtitle title="Economy" />
            <SectionContent>
              Shubore{"'"}s economy thrives on exporting rare seashells, pearls,
              fine shipbuilding timber, and exotic spices. In return, it imports
              luxury goods, tropical fruits, and specialized naval equipment,
              ensuring a robust economic interdependence within Stormhold.
            </SectionContent>
          </SectionContainer>

          <SectionContainer id="politics">
            <SectionSubtitle title="Politics" />
            <SectionContent>
              Governed by a royal family and influential maritime guilds and
              brotherhoods, Shubore plays a pivotal role in the political
              landscape of Stormhold.
              <br />
              <br />
              It adheres to the laws and maintains diplomatic relations set by
              the alliance of THE ELDER {"'"}S SENATE, a governing body
              consisting of representatives from LARIOM, DAWNFALL, MIRLUN, and
              SHUBORE. The political hub of STORMHOLD is the central city of
              GOLDENHALL, where major political decisions and alliances are
              formed.
            </SectionContent>

            <SectionContainer id="culture">
              <SectionSubtitle title="Culture" />
              <SectionContent>
                Shubore{"'"}s culture is deeply intertwined with its maritime
                environment and harsh, icy climate. The people of Shubore, known
                as Shuborians, are renowned for their resilience and physical
                strength, traits honed by unique genetic adaptations to the
                cold. Shuborians have a genetic predisposition for muscle
                growth, making them naturally strong and well-suited for lifting
                heavy materials and serving as formidable soldiers.
                <br />
                <br />
                Following the War of Shadows, they collaborated with the dwarves
                to enhance their craftsmanship, earning a reputation for
                producing the finest goods in all of Stormhold.
                <br />
                <br />
                Shuborian society places a high value on maritime prowess, with
                influential guilds and brotherhoods playing significant roles in
                governance alongside the royal family. Their partnership with
                the dwarves has elevated Shuborian shipbuilding to unparalleled
                levels of excellence. The economy thrives on the export of rare
                seashells, pearls, and exotic spices.
                <br />
                <br />
                Culturally, Shuborians maintain strong traditions of seafaring
                and naval defense. They celebrate their mastery of the icy
                waters through festivals and rituals that honor the sea and
                their ancestors.
              </SectionContent>
            </SectionContainer>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shubore;
