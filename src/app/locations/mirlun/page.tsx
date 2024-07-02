import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";
import ImageLink from "@/components/ImageLink";

const Mirlun = () => {
  return (
    <div>
      <Head>
        <title>Mirlun - Stormhold</title>
      </Head>
      <main className="min-h-[100vh] min-w-[100vw]">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.mirlun})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Mirlun
              </h1>
            </div>
          </div>
        </header>
        <section className="py-10 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold my-5 text-left">
              Welcome to Mirlun
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Mirlun is an independent elven kingdom known for its ancient
              forests and mystical heritage. It operates under its own local
              governance but respects the laws set by THE GREAT ELDERS as a
              member state in the broader political entity of STORMHOLD.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Image
              src={imageUrls.mirlun}
              alt="Mirlun"
              objectFit="cover"
              className="rounded-lg shadow-lg max-w-screen-lg w-[90dvw] h-1/2"
              height={0}
              width={0}
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Mirlun{"'"}s economy thrives on exports such as all kinds of
              clothes, elven crafts, and non-processed herbal medicines. In
              return, it imports technological goods and processed foods from
              other kingdoms, ensuring a balanced economic interdependence
              within STORMHOLD.
            </p>
            <h3 className="text-3xl font-bold my-5">Political Alignment</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Politically, Mirlun maintains autonomy in local matters like
              justice while adhering to the broader laws set by THE GREAT
              ELDERS. Its unique governance structure preserves its cultural
              identity while contributing to the stability of STORMHOLD.
            </p>
            <h3 className="text-3xl font-bold my-5">Cultural Heritage</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Visitors to Mirlun can immerse themselves in its mystical
              heritage, explore ancient forests, and participate in traditional
              elven ceremonies and festivals. The kingdom{"'"}s commitment to
              preserving its natural beauty and historical legacy makes it a
              captivating destination within STORMHOLD.
            </p>
            <h3 className="text-3xl font-bold my-5">The Royal Family</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              The royal family of Mirlun is deeply respected for their wisdom,
              magical prowess, and dedication to the well-being of the kingdom.
              Learn more about the members of the royal family:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-screen-lg w-full">
              <ImageLink
                title="Elion MELITH"
                href="/characters/mirlun/elion_melith"
                backgroundImage={imageUrls.elionMelith}
              />
              <ImageLink
                title="Aryndel MELITH"
                href="/characters/mirlun/aryndel_melith"
                backgroundImage={imageUrls.aryndelMelith}
              />
              <ImageLink
                title="Typhania MELITH"
                href="/characters/mirlun/typhania_melith"
                backgroundImage={imageUrls.typhaniaMelith}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mirlun;
