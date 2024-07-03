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

const SelwynBlaun = () => {
  return (
    <div>
      <Head>
        <title>Selwyn Blaun - Greenhouses headmistress</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.selwynBlaun})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Selwyn Blaun
              </h1>
              <p className="text-xl">Head of MIRLUN{"'"}s great greenhouses</p>
            </div>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  );
};

export default SelwynBlaun;
