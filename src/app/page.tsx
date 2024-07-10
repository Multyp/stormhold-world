/* Global imports */
import { Metadata } from "next";
/* Scoped imports */
/* Local imports */
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import LocationLink from "@/components/ImageLink";
import worldData from "@/data/world_data.json";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";

export const metadata: Metadata = {
  title: "Stormhold",
};

export default function Home() {
  const { world_name, geography, economics, politics } =
    worldData.world_building;

  return (
    <div>
      <main className="min-h-screen">
        <Navbar />
        <Header />
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Discover {world_name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="border border-gray-300 rounded-lg p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-4">Geography</h3>
                  <p className="text-lg text-gray-600">
                    {geography.general_description.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div>
                <div className="border border-gray-300 rounded-lg p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Political Landscape
                  </h3>
                  <p className="text-lg text-gray-600">
                    {politics.description.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <div>
                <div className="border border-gray-300 rounded-lg p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Economic Interdependencies
                  </h3>
                  <ul className="list-disc list-inside text-lg text-gray-600">
                    {Object.keys(economics.interdependencies).map(
                      (kingdom, index) => (
                        <li key={index}>
                          <strong>{kingdom}</strong>: Exports{" "}
                          {economics.interdependencies[
                            kingdom as keyof typeof economics.interdependencies
                          ].exports.join(", ")}
                          , imports{" "}
                          {economics.interdependencies[
                            kingdom as keyof typeof economics.interdependencies
                          ].imports.join(", ")}
                          .
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
              <div>
                <div className="border border-gray-300 rounded-lg p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-4">Major Locations</h3>
                  <ul className="list-disc list-inside text-lg text-gray-600">
                    {Object.keys(geography.major_locations).map(
                      (location, index) => (
                        <li key={index}>
                          <strong>{location}</strong>:{" "}
                          {geography.major_locations[
                            location as keyof typeof geography.major_locations
                          ].description.join(" ")}
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Locations Grid */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-5 text-center">
              Explore {world_name}
            </h1>
            <p className="text-lg text-gray-600 mt-4 text-center pb-8">
              Start your journey by exploring the various locations,
              understanding the political landscape, and delving into the
              economic intricacies of {world_name}.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              <LocationLink
                href="/locations/lariom"
                backgroundImage={imageUrls.lariom}
                title="LARIOM"
              />
              <LocationLink
                href="/locations/dawnfall"
                backgroundImage={imageUrls.dawnfall}
                title="DAWNFALL"
              />
              <LocationLink
                href="/locations/mirlun"
                backgroundImage={imageUrls.mirlun}
                title="MIRLUN"
              />
              <LocationLink
                href="/locations/shubore"
                backgroundImage={imageUrls.shubore}
                title="SHUBORE"
              />
              <LocationLink
                href="/locations/goblin_forests"
                backgroundImage={imageUrls.goblinForests}
                title="GOBLIN FORESTS"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
