import Head from 'next/head';
import Navbar from '@/components/Navbar';
import DAWNFALL from '@/assets/DAWNFALL.webp';
import Footer from '@/components/Footer';

const Dawnfall = () => {
  return (
    <div>
      <Head>
        <title>Dawnfall - Stormhold</title>
      </Head>
      <main className="min-h-[100dvh] min-w-[100dvw]">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{ backgroundImage: `url(${DAWNFALL.src})`, height: '65vh' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">Dawnfall</h1>
            </div>
          </div>
        </header>
        <section className="py-10 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold my-5 text-left">Welcome to Dawnfall</h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Dawnfall is a dwarven kingdom located in the northwest of STORMHOLD, built atop THE GREAT MINES, which are the primary source of stones and metals for the kingdom.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <img src={DAWNFALL.src} alt="Lariom" className="rounded-lg shadow-lg max-w-screen-lg h-1/2" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Dawnfall contributes significantly to the economic structure of STORMHOLD by exporting ores such as iron, copper, and precious metals. In return, it imports processed food products like cheese and bread, along with medical supplies.
            </p>
            <h3 className="text-3xl font-bold my-5">Political Role</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Politically, Dawnfall is part of the alliance overseen by THE GREAT ELDERS, a governing body comprising three humans and three dwarfs. This alliance influences major decisions across STORMHOLD, particularly in the central city of GOLDENHALL.
            </p>
            <h3 className="text-3xl font-bold my-5">Cultural Significance</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Dawnfall{"'"}s culture is deeply rooted in its mining traditions and craftsmanship. The kingdom celebrates its heritage through festivals and stories that honor its historical contributions to STORMHOLD.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Dawnfall;
