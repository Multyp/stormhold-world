import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";
import SectionHeader from "@/components/base/SectionHeader";

export const metadata: Metadata = {
  title: "Felicia Shoner - SHUBORE's supreme witch",
};

const FeliciaShoner = () => {
  return (
    <div>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <SectionHeader
          title="Felicia SHONER"
          subtitle="The supreme witch of SHUBORE"
          imageUrl={imageUrls.feliciaShoner}
        />
      </main>
      <Footer />
    </div>
  );
};

export default FeliciaShoner;
