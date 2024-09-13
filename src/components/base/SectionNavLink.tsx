/* Global imports */
import React from "react";
import Link from "next/link";
/* Scoped imports */
/* Local imports */

interface SectionNavLinkProps {
  href: string;
  title: string;
}

const SectionNavLink: React.FC<SectionNavLinkProps> = ({ href, title }) => {
  return (
    <li className="w-full">
      <Link
        href={href}
        className="block w-full text-left text-blue-600 hover:text-blue-700 hover:bg-gray-200 transition-colors duration-300 p-2 rounded-lg"
      >
        {title}
      </Link>
    </li>
  );
};

export default SectionNavLink;
