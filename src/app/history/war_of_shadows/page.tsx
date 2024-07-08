/* Global imports */
import React from "react";
import Image from "next/image";
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
import SectionNavContainer from "@/components/base/SectionNavContainer";
import SectionNavLink from "@/components/base/SectionNavLink";

export const metadata = {
  title: "The War of Shadows - Detailed History",
};

const WarOfShadows = () => {
  return (
    <div>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <SectionHeader
          imageUrl={imageUrls.default}
          title="The War of Shadows"
          subtitle="A Detailed Historical Account"
        />
        <SectionNavContainer>
          <SectionNavLink
            href="#introduction"
            title="Introduction"
          />
          <SectionNavLink
            href="#causes"
            title="Causes of the War"
          />
          <SectionNavLink
            href="#majorBattles"
            title="Major Battles"
          />
          <SectionNavLink
            href="#consequences"
            title="Consequences"
          />
        </SectionNavContainer>
        <section className="py-10 px-4 flex items-center justify-center flex-col">
          <SectionHeadContainer id="introduction">
            <SectionTitle title="Introduction" />
            <SectionContent>
              The War of Shadows was a pivotal conflict that reshaped the
              political landscape of STORMHOLD, involving all major kingdoms
              over a span of twenty years.
            </SectionContent>
          </SectionHeadContainer>
          <SectionContainer id="causes">
            <SectionSubtitle title="Causes of the War" />
            <SectionContent>
              The war began as a minor territorial dispute between LARIOM and
              the newly reformed DAWNFALL, inhabited by the Saurians. Tensions
              escalated due to economic pressures, cultural misunderstandings,
              and a significant betrayal.
            </SectionContent>
          </SectionContainer>
          <SectionContainer id="majorBattles">
            <SectionSubtitle title="Major Battles" />
            <SectionContent>
              Detailed descriptions of key battles, including the Siege of
              Goldenhall, the Last Stand at Mirlun, and the Naval Blockade by
              SHUBORE. Each battle had strategic importance and turned the tide
              of the war.
            </SectionContent>
          </SectionContainer>
          <SectionContainer id="consequences">
            <SectionSubtitle title="Consequences" />
            <SectionContent>
              The signing of the Peace of Goldenhall not only ended the war but
              also led to the creation of the Elder{"'"}s Senate, a council of
              rulers from each major kingdom to prevent future conflicts. The
              war left deep scars and shaped the cultural identities and
              military strategies of the involved kingdoms.
            </SectionContent>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WarOfShadows;
