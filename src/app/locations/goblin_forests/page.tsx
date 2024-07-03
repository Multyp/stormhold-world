import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";

const GoblinForests = () => {
  return (
    <div>
      <Head>
        <title>Goblin Forests - Stormhold</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.goblinForests})`,
            height: "65vh",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Goblin Forests
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
                    href="#explore"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Explore the Goblin Forests
                  </a>
                </li>
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#autonomy"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Governance and Autonomy
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
            id="explore"
          >
            <h2 className="text-4xl font-bold my-5 text-left">
              Explore the Goblin Forests
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              The Goblin Forests, located in the southeastern part of Stormhold,
              are dense and populated mostly by goblins and wolves. This region
              is recognized as an independent territory under goblin control.
            </p>
          </div>
          <div className="mt-8 mx-4 w-full flex justify-center items-center">
            <div className="relative rounded-lg shadow-lg max-w-screen-lg w-[100dvw] h-1/2">
              <Image
                src={imageUrls.goblinForests}
                alt="Goblin Forests"
                objectFit="cover"
                className="rounded-lg shadow-lg max-w-screen-lg w-full box-border h-1/2"
                height={0}
                width={0}
              />
            </div>
          </div>
          <div
            className="flex flex-col mt-8"
            id="autonomy"
          >
            <h3 className="text-3xl font-bold my-5">Governance and Autonomy</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Governed independently, the Goblin Forests have been granted
              autonomy but are required to stay out of Goldenhall politics and
              refrain from attacking borders of other kingdoms within Stormhold.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="culture"
          >
            <h3 className="text-3xl font-bold my-5">Cultural Heritage</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Despite their isolation, the goblins have a rich cultural heritage
              and unique traditions. They maintain their own governance and
              societal structure within the dense forests, contributing to the
              diverse tapestry of Stormhold{"'"}s political landscape.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GoblinForests;
