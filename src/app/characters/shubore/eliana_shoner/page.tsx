import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";

const TyphaniaMelith = () => {
  return (
    <div>
      <Head>
        <title>Eliana Shoner - Head of SHUBORE fleet</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.elianaShoner})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Eliana SHONER
              </h1>
              <p className="text-xl">The sword of SHUBORE</p>
            </div>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  );
};

export default TyphaniaMelith;
