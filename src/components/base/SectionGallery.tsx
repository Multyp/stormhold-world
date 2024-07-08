"use client";

import Image from "next/image";
import imageUrls from "@/constants/imageUrls";
import React, { useState } from "react";
import ImageModal from "@/components/base/ImageModal";

interface GalleryImage {
  url: string;
  alt: string;
}

interface SectionGalleryProps {
  gallery: GalleryImage[];
}

const SectionGallery: React.FC<SectionGalleryProps> = ({ gallery }) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
      <div className="grid grid-cols-2 gap-4 mt-4 max-h-96 h-full">
        <div
          className="relative col-span-1 cursor-pointer"
          onClick={() => handleImageClick(gallery[0])}
        >
          <Image
            src={imageUrls[gallery[0].url as keyof typeof imageUrls]}
            alt={gallery[0].alt}
            className="w-full max-h-96 object-cover rounded-md"
            style={{ height: "100%" }}
            width={0}
            height={0}
            draggable={false}
          />
          <div className="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded-lg opacity-75">
            AI Generated
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          {gallery.slice(1).map((image, index) => (
            <div
              key={index}
              className="relative rounded-md overflow-hidden cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <Image
                src={imageUrls[image.url as keyof typeof imageUrls]}
                alt={image.alt}
                className="w-full max-h-44 object-cover rounded-md"
                style={{ height: "auto" }}
                width={0}
                height={0}
                draggable={false}
              />
              <div className="absolute bottom-2 right-2 bg-black text-white text-sm px-2 py-1 rounded-lg opacity-75">
                AI Generated
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <ImageModal
          imageUrl={imageUrls[selectedImage.url as keyof typeof imageUrls]}
          alt={selectedImage.alt}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default SectionGallery;
