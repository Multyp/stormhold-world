/* Global imports */
import Image from "next/image";
import React from "react";
/* Scoped imports */
/* Local imports */

interface ImageModalProps {
  imageUrl: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, alt, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 animate-fadeIn">
      <div className="relative max-w-full max-h-full p-4">
        <Image
          src={imageUrl}
          alt={alt}
          className="max-w-5xl max-h-5xl w-full h-full rounded-md"
          width={0}
          height={0}
          draggable={false}
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-85 transition group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 group-hover:stroke-red-500 w-6 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
