"use client";

/* Global imports */
import Link from "next/link";
/* Scoped imports */
import { navLinks } from "@/constants/navLinks";
import { Dispatch, SetStateAction } from "react";

/**
 * Drawer component for mobile navigation.
 * It displays a list of navigation links when the mobile menu is open.
 *
 * @param {Object} props - The component props
 * @param {boolean} props.isMenuOpen - State indicating whether the mobile menu is open
 * @param {Dispatch<SetStateAction<boolean>>} props.setIsMenuOpen - Function to update the isMenuOpen state
 */
const Drawer = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      {isMenuOpen && (
        <div className="md:hidden bg-transparent animate-fade-in-down z-10">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.url}
              className="block px-4 py-2 text-sm hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Drawer;
