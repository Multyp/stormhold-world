import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";

const Shubore = () => {
  return (
    <div>
      <Head>
        <title>Shubore - Stormhold</title>
      </Head>
      <main className="min-h-screen min-w-full">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(${imageUrls.shubore})`,
            height: "65vh",
          }}
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
        <nav className="py-4 w-[100dvw] flex justify-center items-center">
          <div className="container mx-auto px-4 max-w-screen-lg">
            <div className="bg-gray-100 shadow-md rounded-lg p-4">
              <ul className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-4">
                <li className="w-full md:w-auto text-center">
                  <a
                    href="#welcome"
                    className="text-blue-600 hover:underline block p-2"
                  >
                    Welcome to Shubore
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
                    Political Governance
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
              Welcome to Shubore
            </h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Shubore is a snowy maritime kingdom located in the northeast of
              Stormhold, renowned for its mastery of icy waters and naval
              prowess. It is a crucial hub for maritime trade and defense,
              maintaining alliances with neighboring kingdoms.
            </p>
          </div>
          <div className="mt-8 mx-4 w-full flex justify-center items-center">
            <div className="relative rounded-lg shadow-lg max-w-screen-lg w-[100dvw] h-1/2">
              <Image
                src={imageUrls.shubore}
                alt="Shubore"
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
              Shubore{"'"}s economy thrives on exporting rare seashells, pearls,
              fine shipbuilding timber, and exotic spices. In return, it imports
              luxury goods, tropical fruits, and specialized naval equipment,
              ensuring a robust economic interdependence within Stormhold.
            </p>
          </div>
          <div
            className="flex flex-col mt-8"
            id="politics"
          >
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
