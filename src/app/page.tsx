import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Link from 'next/link';

// Sample images for the locations
import LARIOM from '@/assets/LARIOM.jpeg';
import DAWNFALL from '@/assets/DAWNFALL.webp';
import MIRLUN from '@/assets/MIRLUN.webp';
import GOBLIN_FOREST from '@/assets/GOBLIN_FORESTS.webp';
import UNKNOWN from '@/assets/UNKNOWN.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Stormhold</title>
      </Head>
      <main className="min-h-[100dvh] min-w-[100dvw]">
        <Navbar />
        <Header />
        <section className="py-10">
          <h1 className="text-4xl font-bold my-5 text-center">A magical journey</h1>
          <p className="text-lg text-gray-600 mt-4 text-center pb-8">
            Start your journey by exploring the various locations, understanding the political landscape, and delving into the economic intricacies of Stormhold.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mt-8 relative z-0">
            <Link href="/locations/lariom" className="group relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${LARIOM.src})` }}>
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <span className="text-lg font-bold">LARIOM</span>
                <span className="ml-2">➔</span>
              </div>
            </Link>
            <Link href="/locations/dawnfall" className="group relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${DAWNFALL.src})` }}>
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <span className="text-lg font-bold">DAWNFALL</span>
                <span className="ml-2">➔</span>
              </div>
            </Link>
            <Link href="/locations/mirlun" className="group relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${MIRLUN.src})` }}>
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <span className="text-lg font-bold">MIRLUN</span>
                <span className="ml-2">➔</span>
              </div>
            </Link>
            <Link href="/locations/goblin-forest" className="group relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${GOBLIN_FOREST.src})` }}>
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <span className="text-lg font-bold">Goblin Forest</span>
                <span className="ml-2">➔</span>
              </div>
            </Link>
            <Link href="/locations/unknown" className="group relative bg-cover bg-center h-64" style={{ backgroundImage: `url(${UNKNOWN.src})` }}>
              <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
                <span className="text-lg font-bold">UNKNOWN</span>
                <span className="ml-2">➔</span>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
