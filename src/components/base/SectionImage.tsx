import Image from "next/image";
import React from "react";

interface SectionImageProps {
  alt: string;
  imageUrl: string;
}

const SectionImage: React.FC<SectionImageProps> = ({ alt, imageUrl }) => {
  return (
    <div className="relative rounded-lg shadow-lg max-w-screen-lg w-full h-auto overflow-hidden">
      <Image
        src={imageUrl}
        alt={alt}
        layout="responsive"
        width={0}
        height={0}
      />
      <div className="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded-lg opacity-75">
        AI Generated
      </div>
    </div>
  );
};

export default SectionImage;
