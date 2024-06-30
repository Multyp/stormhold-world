"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationLink from "@/components/ImageLink";
import characters from "@/app/characters/characters";

const Characters = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedCharacters = characters
    .filter(characters =>
      characters.name.toLowerCase().includes(searchTerm.toLowerCase()),
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

  return (
    <div>
      <Head>
        <title>Characters - Discover the People</title>
      </Head>
      <main className="min-h-screen">
        <Navbar />
        <header
          className="relative bg-cover bg-center parallax"
          style={{
            backgroundImage: `url(/assets/UNKNOWN.jpg)`,
            height: "65vh",
          }}
        ></header>
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Explore the Characters</h2>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded px-3 py-1"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  onClick={toggleSortOrder}
                >
                  {sortOrder === "asc" ? "Sort A-Z" : "Sort Z-A"}
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {sortedCharacters.map((character, index) => (
                <LocationLink
                  key={index}
                  href={character.link}
                  backgroundImage={character.imageSrc}
                  title={character.name}
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

export default Characters;
