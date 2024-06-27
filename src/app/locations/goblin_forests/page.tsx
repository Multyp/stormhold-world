import Head from "next/head";
import Navbar from "@/components/Navbar";
import GOBLIN_FORESTS from "@/assets/GOBLIN_FORESTS.webp";
import Footer from "@/components/Footer";

const GoblinForests = () => {
  return (
    <div>
      <Head>
        <title>Goblin Forests - Stormhold</title>
      </Head>
      <main className="min-h-[100vh] min-w-[100vw]">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${GOBLIN_FORESTS.src})`,
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
        <section className="py-10 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold my-5 text-left">
              Explore the Goblin Forests
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              The Goblin Forests, located in the southeastern part of Stormhold,
              are dense and populated mostly by goblins and wolves. This region
              is recognized as an independent territory under goblin control.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <img
              src={GOBLIN_FORESTS.src}
              alt="Goblin Forests"
              className="rounded-lg shadow-lg max-w-screen-lg w-[90dvw] h-1/2"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Governed independently, the Goblin Forests have been granted
              autonomy but are required to stay out of Goldenhall politics and
              refrain from attacking borders of other kingdoms within Stormhold.
            </p>
            <h3 className="text-3xl font-bold my-5">
              Cultural and Political Independence
            </h3>
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
