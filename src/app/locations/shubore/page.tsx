import Head from "next/head";
import Navbar from "@/components/Navbar";
import SHUBORE from "@/assets/SHUBORE.webp";
import Footer from "@/components/Footer";

const Shubore = () => {
  return (
    <div>
      <Head>
        <title>Shubore - Stormhold</title>
      </Head>
      <main className="min-h-[100vh] min-w-[100vw]">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{ backgroundImage: `url(${SHUBORE.src})`, height: "65vh" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">
                Shubore
              </h1>
            </div>
          </div>
        </header>
        <section className="py-10 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold my-5 text-left">
              Welcome to Shubore
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Shubore is a snowy maritime kingdom located in the northeast of
              Stormhold, renowned for its mastery of icy waters and naval
              prowess. It is a crucial hub for maritime trade and defense,
              maintaining alliances with neighboring kingdoms.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <img
              src={SHUBORE.src}
              alt="Shubore"
              className="rounded-lg shadow-lg max-w-screen-lg h-1/2"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Shubore{"'"}s economy thrives on exporting rare seashells, pearls,
              fine shipbuilding timber, and exotic spices. In return, it imports
              luxury goods, tropical fruits, and specialized naval equipment,
              ensuring a robust economic interdependence within Stormhold.
            </p>
            <h3 className="text-3xl font-bold my-5">Political Governance</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Governed by a royal family and influential maritime guilds and
              brotherhoods, Shubore plays a pivotal role in the political
              landscape of Stormhold. It adheres to the laws and maintains
              diplomatic relations set by THE GREAT ELDERS.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shubore;