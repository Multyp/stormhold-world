"use client";

/* Global imports */
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
/* Scoped imports */
import { navLinks } from "@/constants/navLinks";
/* Local imports */
import Drawer from "@/layout/Navbar/Drawer";

/**
 * Navbar component that provides navigation and responsive menu functionality.
 * It includes a scroll-hiding feature and a mobile drawer for smaller screens.
 */
const Navbar = () => {
  // State to manage the mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage navbar visibility when scrolling
  const [isVisible, setIsVisible] = useState(true);
  // Ref to store the last scroll position
  const lastScrollY = useRef(0);

  // Effect to handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        // Scrolling down, hide the navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show the navbar
        setIsVisible(true);
      }
      // Update the last scroll position
      lastScrollY.current = window.scrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`bg-black bg-opacity-75 z-50 fixed w-full text-white shadow-lg transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Banner for AI-generated images */}
        <div className="bg-yellow-400 text-black p-2 text-center">
          <p className="text-sm">
            This page features images generated by AI.{" "}
            <Link
              href="/learn-more"
              className="text-sm underline hover:text-gray-500 transition-colors duration-300"
            >
              Learn more
            </Link>
          </p>
        </div>
        <div className="container mx-auto p-4 flex justify-between items-center">
          {/* Logo/Home link */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold hover:text-gray-400 transition-colors duration-300"
            >
              Stormhold
            </Link>
          </div>
          {/* Desktop navigation links */}
          <div className="hidden md:flex space-x-4">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className="hover:text-gray-400 transition-colors duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
          {/* Mobile menu button */}
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
                style={{
                  transform: isMenuOpen ? "rotate(45deg)" : "rotate(0)",
                }}
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
        {/* Mobile drawer component */}
        <Drawer
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </nav>
    </>
  );
};

export default Navbar;
