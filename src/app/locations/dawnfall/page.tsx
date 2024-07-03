import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";

const Dawnfall = () => {
  return (
    <div>
      <Head>
        <title>Dawnfall - Stormhold</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.dawnfall})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Dawnfall
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
                    Welcome to Dawnfall
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
                    Political Role
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#culture"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Cultural Significance
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
              Welcome to Dawnfall
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Dawnfall is a dwarven kingdom located in the northwest of
              STORMHOLD, built atop THE GREAT MINES, which are the primary
              source of stones and metals for the kingdom.
            </p>
          </div>
          <div className="mt-8 mx-4 w-full flex justify-center items-center">
            <div className="relative rounded-lg shadow-lg max-w-screen-lg w-[100dvw] h-1/2">
              <Image
                src={imageUrls.dawnfall}
                alt="Dawnfall"
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
              Dawnfall contributes significantly to the economic structure of
              STORMHOLD by exporting ores such as iron, copper, and precious
              metals. In return, it imports processed food products like cheese
              and bread, along with medical supplies.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="politics"
          >
            <h3 className="text-3xl font-bold my-5">Political Role</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Politically, Dawnfall is part of the alliance overseen by THE
              GREAT ELDERS, a governing body comprising three humans and three
              dwarfs. This alliance influences major decisions across STORMHOLD,
              particularly in the central city of GOLDENHALL.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="culture"
          >
            <h3 className="text-3xl font-bold my-5">Cultural Significance</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Dawnfall{"'"}s culture is deeply rooted in its mining traditions
              and craftsmanship. The kingdom celebrates its heritage through
              festivals and stories that honor its historical contributions to
              STORMHOLD.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Dawnfall;
