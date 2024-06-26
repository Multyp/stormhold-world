import Head from 'next/head';
import Navbar from '@/components/Navbar';
import LARIOM from '@/assets/LARIOM.jpeg';
import Footer from '@/components/Footer';

const Lariom = () => {
  return (
    <div>
      <Head>
        <title>Lariom - Stormhold</title>
      </Head>
      <main className="min-h-[100dvh] min-w-[100dvw]">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{ backgroundImage: `url(${LARIOM.src})`, height: '65vh' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">Lariom</h1>
            </div>
          </div>
        </header>
        <section className="py-10 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold my-5 text-left">Welcome to Lariom</h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Lariom is a place of wonder and mystery. Explore the rich history, vibrant culture, and breathtaking landscapes that make Lariom a unique destination.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <img src={LARIOM.src} alt="Lariom" className="rounded-lg shadow-lg max-w-full h-1/2" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Lariom, the human kingdom situated in the southwest of the continent, is known for its strategic military positions and rich cultural history.
            </p>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              As part of the broader continent of STORMHOLD, Lariom plays a crucial role in both the political and economic spheres.
            </p>
            <h3 className="text-3xl font-bold my-5">Economic Contributions</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Lariom is known for exporting processed agricultural products and medicinal goods, which are highly valued across the continent. In return, it imports various ores essential for tool and weapon manufacturing, primarily sourced from the dwarven kingdom of DAWNFALL.
            </p>
            <h3 className="text-3xl font-bold my-5">Political Landscape</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Politically, Lariom is part of the alliance overseen by THE GREAT ELDERS, a governing body comprising three humans and three dwarfs. The political hub of STORMHOLD is the central city of GOLDENHALL, where major political decisions and alliances are formed.
            </p>
            <h3 className="text-3xl font-bold my-5">Cultural Heritage</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              The cultural heritage of Lariom is rich and diverse. The kingdom is renowned for its military traditions and historical significance. Visitors can explore ancient fortresses, participate in traditional festivals, and learn about the storied past of this vibrant kingdom.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Lariom;
