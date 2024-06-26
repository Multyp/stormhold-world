import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import Link from 'next/link';
import LARIOM from '@/assets/LARIOM.jpeg';
import DAWNFALL from '@/assets/DAWNFALL.webp';
import MIRLUN from '@/assets/MIRLUN.webp';
import GOBLIN_FOREST from '@/assets/GOBLIN_FORESTS.webp';
import UNKNOWN from '@/assets/UNKNOWN.jpg';
import worldData from '@/data/world_data.json';

export default function Home() {
  const { world_name, geography, economics, politics } = worldData.world_building;

  return (
    <div>
      <Head>
        <title>Welcome to {world_name}</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <Header />
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Discover {world_name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="border border-gray-300 rounded-lg p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-4">Geography</h3>
                  <p className="text-lg text-gray-600">
                    {geography.general_description.map((line, index) => (
                      <span key={index}>{line}<br /></span>
                    ))}
                  </p>
                </div>
              </div>
              <div>
                <div className="border border-gray-300 rounded-lg p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-4">Political Landscape</h3>
                  <p className="text-lg text-gray-600">
                    {politics.description.map((line, index) => (
                      <span key={index}>{line}<br /></span>
                    ))}
                  </p>
                </div>
              </div>
              <div>
                <div className="border border-gray-300 rounded-lg p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-4">Economic Interdependencies</h3>
                  <ul className="list-disc list-inside text-lg text-gray-600">
                    {Object.keys(economics.interdependencies).map((kingdom, index) => (
                      <li key={index}>
                        <strong>{kingdom}</strong>: Exports {economics.interdependencies[kingdom].exports.join(', ')}, imports {economics.interdependencies[kingdom].imports.join(', ')}.
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="border border-gray-300 rounded-lg p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-4">Major Locations</h3>
                  <ul className="list-disc list-inside text-lg text-gray-600">
                    {Object.keys(geography.major_locations).map((location, index) => (
                      <li key={index}>
                        <strong>{location}</strong>: {geography.major_locations[location].description.join(' ')}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Locations Grid */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-5 text-center">Explore {world_name}</h1>
            <p className="text-lg text-gray-600 mt-4 text-center pb-8">
              Start your journey by exploring the various locations, understanding the political landscape, and delving into the economic intricacies of {world_name}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
          </div>
        </section>
      </main>
      <footer className="py-4 bg-gray-900 text-center">
        <p className="text-sm text-gray-200">&copy; 2024 Stormhold. All rights reserved.</p>
      </footer>
    </div>
  );
}
