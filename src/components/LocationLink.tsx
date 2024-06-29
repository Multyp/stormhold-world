import React from "react";
import Link from "next/link";

interface LocationLinkProps {
  href: string;
  backgroundImage: string;
  title: string;
}

const LocationLink: React.FC<LocationLinkProps> = ({
  href,
  backgroundImage,
  title,
}) => {
  return (
    <Link
      href={href}
      className="group relative bg-cover bg-center h-64"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-25 group-hover:opacity-75 transition-opacity"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center">
        <span className="text-lg font-bold">{title}</span>
        <span className="ml-2">➔</span>
      </div>
    </Link>
  );
};

export default LocationLink;
