/* Global imports */
import Head from "next/head";
import Link from "next/link";
/* Scoped imports */
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

const LearnMore = () => {
  return (
    <div>
      <Head>
        <title>About Stormhold</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <SectionHeader
          imageUrl={imageUrls.default} // Replace with actual image URL
          title="About Stormhold"
          subtitle="Learn More"
        />
        <section className="py-10 px-4 flex items-center justify-center flex-col">
          <SectionContainer id="about">
            <SectionSubtitle title="About the Use of AI-Generated Images" />
            <SectionContent>
              <p>
                In creating this project, AI-generated images have been utilized
                through services like DALL-E 3 with CHatGPT and Microsoft
                Designer. It{"'"}s important to note that I do not support the
                use of AI-generated images for commercial purposes.
              </p>
              <p>
                This project serves as a personal exploration and does not aim
                for profit. Future iterations will feature original artwork
                created by myself, replacing AI-generated images. All
                AI-generated images used are clearly marked as such.
              </p>
            </SectionContent>
          </SectionContainer>
          <SectionContainer id="intentions">
            <SectionSubtitle title="Intentions" />
            <SectionContent>
              <p>
                My intention with this project is to visualize my creative ideas
                and showcase my thoughts through visual representation. I am
                committed to transitioning to entirely original artwork in
                future updates.
              </p>
            </SectionContent>
          </SectionContainer>
          <SectionContainer id="future">
            <SectionSubtitle title="Future Plans" />
            <SectionContent>
              <p>
                I plan to replace all AI-generated images with my own drawings
                to maintain creative integrity and authenticity.
              </p>
            </SectionContent>
          </SectionContainer>
          <div className="mt-8">
            <Link
              href="/"
              className="text-blue-600 hover:underline"
            >
              Return to Homepage
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMore;