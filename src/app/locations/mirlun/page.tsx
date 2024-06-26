import Head from 'next/head';
import Navbar from '@/components/Navbar';
import MIRLUN from '@/assets/MIRLUN.webp';

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
          style={{ backgroundImage: `url(${MIRLUN.src})`, height: '65vh' }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
            <div className="container">
              <h1 className="text-4xl font-bold my-5 animate-fadeInUp">Mirlun</h1>
            </div>
          </div>
        </header>
        <section className="py-10 px-4">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl font-bold my-5 text-left">Welcome to Mirlun</h2>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Mirlun is an independent elven kingdom known for its ancient forests and mystical heritage. It operates under its own local governance but respects the laws set by THE GREAT ELDERS as a member state in the broader political entity of STORMHOLD.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <img src={MIRLUN.src} alt="Mirlun" className="rounded-lg shadow-lg max-w-screen-lg h-1/2" />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Mirlun{"'"}s economy thrives on exports such as all kinds of clothes, elven crafts, and non-processed herbal medicines. In return, it imports technological goods and processed foods from other kingdoms, ensuring a balanced economic interdependence within STORMHOLD.
            </p>
            <h3 className="text-3xl font-bold my-5">Political Alignment</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Politically, Mirlun maintains autonomy in local matters like justice while adhering to the broader laws set by THE GREAT ELDERS. Its unique governance structure preserves its cultural identity while contributing to the stability of STORMHOLD.
            </p>
            <h3 className="text-3xl font-bold my-5">Cultural Heritage</h3>
            <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
              Visitors to Mirlun can immerse themselves in its mystical heritage, explore ancient forests, and participate in traditional elven ceremonies and festivals. The kingdom{"'"}s commitment to preserving its natural beauty and historical legacy makes it a captivating destination within STORMHOLD.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Mirlun;
