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
      <main className="min-h-screen min-w-full">
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
        <nav className="py-4 w-[100dvw] flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="bg-gray-100 shadow-md rounded-lg p-4">
              <ul className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-4">
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#welcome"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Welcome to Mirlun
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#economy"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Economy
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#politics"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Political Alignment
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#culture"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Cultural Heritage
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#royal-family"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    The Royal Family
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="py-10 px-4 flex items-center justify-center flex-col">
          <div
            className="flex flex-col max-w-screen-lg"
            id="welcome"
          >
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
          <div className="mt-8 mx-4 w-full flex justify-center items-center">
            <div className="relative rounded-lg shadow-lg max-w-screen-lg w-[100dvw] h-1/2">
              <Image
                src={imageUrls.mirlun}
                alt="Mirlun"
                objectFit="cover"
                className="rounded-lg shadow-lg max-w-screen-lg w-full box-border h-1/2"
                height={0}
                width={0}
              />
            </div>
          </div>
          <div
            className="flex flex-col mt-8"
            id="economy"
          >
            <h3 className="text-3xl font-bold my-5">Economy</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Mirlun{"'"}s economy thrives on exports such as all kinds of
              clothes, elven crafts, and non-processed herbal medicines. In
              return, it imports technological goods and processed foods from
              other kingdoms, ensuring a balanced economic interdependence
              within STORMHOLD.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="politics"
          >
            <h3 className="text-3xl font-bold my-5">Political Alignment</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Politically, Mirlun maintains autonomy in local matters like
              justice while adhering to the broader laws set by THE GREAT
              ELDERS. Its unique governance structure preserves its cultural
              identity while contributing to the stability of STORMHOLD.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="culture"
          >
            <h3 className="text-3xl font-bold my-5">Cultural Heritage</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Visitors to Mirlun can immerse themselves in its mystical
              heritage, explore ancient forests, and participate in traditional
              elven ceremonies and festivals. The kingdom{"'"}s commitment to
              preserving its natural beauty and historical legacy makes it a
              captivating destination within STORMHOLD.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="royal-family"
          >
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
