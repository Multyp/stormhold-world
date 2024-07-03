import Image from "next/image";
import React from "react";

interface SectionImageProps {
  alt: string;
  imageUrl: string;
}

const SectionImage: React.FC<SectionImageProps> = ({ alt, imageUrl }) => {
  return (
    <Image
      src={imageUrl}
      alt={alt}
      className="rounded-lg shadow-lg max-w-screen-lg w-full box-border h-1/2"
      height={0}
      width={0}
    />
  );
};

export default SectionImage;
