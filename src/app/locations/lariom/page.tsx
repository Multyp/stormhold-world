import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";

const Lariom = () => {
  return (
    <div>
      <Head>
        <title>Lariom - Stormhold</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.lariom})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Lariom
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
                    Welcome to Lariom
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
                    Political Landscape
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
              Welcome to Lariom
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Lariom is a place of wonder and mystery. Explore the rich history,
              vibrant culture, and breathtaking landscapes that make Lariom a
              unique destination.
            </p>
          </div>
          <div className="mt-8 mx-4 w-full flex justify-center items-center">
            <div className="relative rounded-lg shadow-lg max-w-screen-lg w-[100dvw] h-1/2">
              <Image
                src={imageUrls.lariom}
                alt="Lariom"
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
              Lariom is known for exporting processed agricultural products and
              medicinal goods, which are highly valued across the continent. In
              return, it imports various ores essential for tool and weapon
              manufacturing, primarily sourced from the dwarven kingdom of
              DAWNFALL.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="politics"
          >
            <h3 className="text-3xl font-bold my-5">Political Landscape</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Politically, Lariom is part of the alliance overseen by THE GREAT
              ELDERS, a governing body comprising three humans and three dwarfs.
              The political hub of STORMHOLD is the central city of GOLDENHALL,
              where major political decisions and alliances are formed.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="culture"
          >
            <h3 className="text-3xl font-bold my-5">Cultural Heritage</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              The cultural heritage of Lariom is rich and diverse. The kingdom
              is renowned for its military traditions and historical
              significance. Visitors can explore ancient fortresses, participate
              in traditional festivals, and learn about the storied past of this
              vibrant kingdom.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Lariom;
