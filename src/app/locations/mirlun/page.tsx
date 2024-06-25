import Head from 'next/head';
import Navbar from '@/components/Navbar';
import MIRLUN from '@/assets/MIRLUN.webp';

const Mirlun = () => {
  return (
    <div>
      <Head>
        <title>Mirlun - Stormhold</title>
      </Head>
      <main className="min-h-[100dvh] min-w-[100dvw]">
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
            {}
        </section>
      </main>
    </div>
  );
}

export default Mirlun;
