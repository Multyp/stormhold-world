/* Global imports */
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

/* Local imports */

interface SectionNavLinkProps {
  href: string;
  title: string;
  collapsable?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
}

const SectionNavLink: React.FC<SectionNavLinkProps> = ({
  href,
  title,
  collapsable = false,
  isOpen = false,
  onClick,
}) => {
  return (
    <li className="w-full">
      <div
        className="flex gap-2 items-center w-full text-left text-blue-600 rounded-lg"
        onClick={onClick}
      >
        <Link
          href={href}
          className="hover:underline hover:text-blue-700 hover:bg-gray-200 transition-colors duration-300 p-2 rounded-lg"
        >
          {title}
        </Link>
        {collapsable && (
          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="ml-2 hover:text-blue-700 hover:bg-gray-200 w-4 h-4 p-2 transition-colors duration-300 rounded-lg"
          />
        )}
      </div>
    </li>
  );
};

export default SectionNavLink;
