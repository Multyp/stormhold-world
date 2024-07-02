"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-75 z-50 fixed w-full text-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-2xl font-bold hover:text-gray-400 transition-colors duration-300"
          >
            Stormhold
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            href="/locations"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Locations
          </Link>
          <Link
            href="/politics"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Politics
          </Link>
          <Link
            href="/history"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            History
          </Link>
          <Link
            href="/characters"
            className="hover:text-gray-400 transition-colors duration-300"
          >
            Characters
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none mx-5 mt-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: isMenuOpen ? "rotate(45deg)" : "rotate(0)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-transparent animate-fade-in-down z-10">
          <Link
            href="/locations"
            className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Locations
          </Link>
          <Link
            href="/politics"
            className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Politics
          </Link>
          <Link
            href="/history"
            className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            History
          </Link>
          <Link
            href="/characters"
            className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Characters
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
