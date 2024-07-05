/* Global imports */
import { Metadata } from "next";
/* Scoped imports */
/* Local imports */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";
import SectionHeader from "@/components/base/SectionHeader";

export const metadata: Metadata = {
  title: "Eliana Shoner - Head of SHUBORE fleet",
};

const ElianaShoner = () => {
  return (
    <div>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <SectionHeader
          title="Eliana SHONER"
          subtitle="The sword of SHUBORE"
          imageUrl={imageUrls.elianaShoner}
        />
      </main>
      <Footer />
    </div>
  );
};

export default ElianaShoner;
