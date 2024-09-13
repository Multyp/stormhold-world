/* Global imports */
import { Metadata } from "next";
/* Scoped imports */
/* Local imports */
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import LocationLink from "@/components/ImageLink";
import Footer from "@/components/Footer";
import imageUrls from "@/constants/imageUrls";

export const metadata: Metadata = {
  title: "Stormhold",
};

const world_name = "Stormhold";

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-gray-100 text-black">
        <Navbar />
        <Header />
        {/* Locations Grid */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold my-5 text-center">
              Explore Stormhold
            </h1>
            <p className="text-lg text-gray-600 mt-4 text-center pb-8">
              Start your journey by exploring the various locations,
              understanding the political landscape, and delving into the
              economic intricacies of Stormhold.
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
                href="/locations/treetide"
                backgroundImage={imageUrls.default}
                title="TREETIDE"
              />
              <LocationLink
                href="/locations/ashenhelm"
                backgroundImage={imageUrls.default}
                title="ASHENHELM"
              />
              <LocationLink
                href="/locations/sundria"
                backgroundImage={imageUrls.default}
                title="SUNDRIA"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
