"use client";

/* Global imports */
import { useState } from "react";
import { Metadata } from "next";
/* Scoped imports */
/* Local imports */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationLink from "@/components/ImageLink";
import locations from "./locations";
import Header from "@/components/Header";
import SectionHeader from "@/components/base/SectionHeader";
import imageUrls from "@/constants/imageUrls";

export const metadata: Metadata = {
  title: "Locations - Discover the World",
};

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const sortedLocations = locations
    .filter(
      location =>
        location.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTags.length === 0 ||
          selectedTags.every(tag => location.tags.includes(tag))),
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prevSelectedTags =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter(t => t !== tag)
        : [...prevSelectedTags, tag],
    );
  };

  const allTags = Array.from(
    new Set(locations.flatMap(location => location.tags)),
  );

  return (
    <div>
      <main className="min-h-screen">
        <Navbar />
        <SectionHeader
          title="Discover STORMHOLD"
          subtitle="All about the continent"
          imageUrl={imageUrls.default}
        />
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
              <h2 className="text-3xl font-bold">Explore Locations</h2>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded px-3 py-2 w-full sm:w-auto"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
                  onClick={toggleSortOrder}
                >
                  {sortOrder === "asc" ? "Sort A-Z" : "Sort Z-A"}
                </button>
              </div>
            </div>
            <div className="flex flex-wrap mb-8">
              {allTags.map(tag => (
                <button
                  key={tag}
                  className={`px-3 py-1 m-1 rounded ${
                    selectedTags.includes(tag)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {sortedLocations.map((location, index) => (
                <LocationLink
                  key={index}
                  href={location.link}
                  backgroundImage={location.imageSrc}
                  title={location.name}
                  // description={location.description}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Locations;
