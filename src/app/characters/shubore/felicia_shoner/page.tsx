import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";

const FeliciaShoner = () => {
  return (
    <div>
      <Head>
        <title>Felicia Shoner - SHUBORE{"'"}s supreme witch</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.feliciaShoner})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Felicia SHONER
              </h1>
              <p className="text-xl">The supreme witch of SHUBORE</p>
            </div>
          </div>
        </header>
      </main>
      <Footer />
    </div>
  );
};

export default FeliciaShoner;
