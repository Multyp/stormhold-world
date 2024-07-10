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
    <li className="w-full md:w-auto text-center">
      <Link
        href={href}
        className="text-blue-600 hover:underline block p-2"
      >
        {title}
      </Link>
    </li>
  );
};

export default SectionNavLink;
