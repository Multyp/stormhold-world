import Link from "next/link";
import { Metadata } from "next";
import imageUrls from "@/constants/imageUrls";
import SectionSubtitle from "@/components/base/SectionSubtitle";
import SectionContent from "@/components/base/SectionContent";
import SectionContainer from "@/components/base/SectionContainer";
import SectionHeader from "@/components/base/SectionHeader";
import Layout from "@/layout";

export const metadata: Metadata = {
  title: "About Stormhold",
};

const LearnMore = () => {
  return (
    <Layout>
      <SectionHeader
        imageUrl={imageUrls.default}
        title="About Stormhold"
        subtitle="Learn More"
      />
      <section className="py-10 px-4 flex items-center justify-center flex-col">
        <SectionContainer
          title="About Stormhold"
          id="about"
        >
          <SectionSubtitle title="About Stormhold" />
          <SectionContent>
            Welcome to Stormhold, a personal project where I{"'"}m building a
            complete fantasy world. This world is full of unique places,
            characters, history, and lore. It blends medieval fantasy with dark
            fantasy elements and draws inspiration from anime aesthetics.
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          title="About the Use of AI-Generated Images"
          id="ai-images"
        >
          <SectionSubtitle title="About the Use of AI-Generated Images" />
          <SectionContent>
            AI-generated images have played a significant role in visualizing
            this world. I{"'"}ve used AI tools, such as DALL-E 3 and Microsoft
            Designer, to generate images that reflect how I imagine various
            locations and characters. These images have helped me bring my ideas
            to life and communicate the visual aspects of Stormhold. However, it
            {"'"}s important to note that I do not endorse the use of
            AI-generated images for commercial purposes.
            <br />
            <br />
            This project remains non-commercial and serves as a creative
            exploration. Moving forward, I am committed to replacing all
            AI-generated images with my own original artwork. These AI images
            are marked clearly, and future iterations of the project will focus
            on maintaining creative integrity through handmade art.
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          title="Creative Intentions"
          id="intentions"
        >
          <SectionSubtitle title="Creative Intentions" />
          <SectionContent>
            My primary intention with this project is to visualize my creative
            ideas and share them with my friends and anyone else who might be
            interested. Although this is a personal project, it remains open to
            the public via GitHub Pages. I want to be transparent about my
            creative process, especially concerning the use of AI in the initial
            stages. Eventually, as I transition to original artwork, the project
            will fully embody my own artistic vision.
          </SectionContent>
        </SectionContainer>

        <SectionContainer
          title="Future Plans"
          id="future-plans"
        >
          <SectionSubtitle title="Future Plans" />
          <SectionContent>
            In the future, I plan to replace all AI-generated images with my own
            drawings to ensure creative authenticity. Beyond that, I aim to
            continue expanding the world of Stormhold, gradually adding new
            places, characters, and stories to the universe. Although my main
            focus is on building this world, I might consider turning these
            ideas into a more structured narrative, possibly an e-book, as the
            world grows and evolves.
          </SectionContent>
        </SectionContainer>

        <div className="mt-12 mb-4">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Return to Homepage
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default LearnMore;
