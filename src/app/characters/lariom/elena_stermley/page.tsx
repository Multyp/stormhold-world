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
import SectionNavContainer from "@/components/base/SectionNavContainer";
import SectionNavLink from "@/components/base/SectionNavLink";

export const metadata: Metadata = {
  title: "Elena STERMLEY - Queen of LARIOM",
};

const ElenaStermley = () => {
  return (
    <div>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <SectionHeader
          imageUrl={imageUrls.elenaStermley}
          title="Elena STERMLEY"
          subtitle="Tragic queen of LARIOM"
        />
      </main>
      <Footer />
    </div>
  );
};

export default ElenaStermley;
