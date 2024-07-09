"use client";

/* Global imports */
import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
/* Scoped imports */
/* Local imports */

interface PronunciationButtonProps {
  pronunciation: string;
  name: string;
}

const PronunciationButton: React.FC<PronunciationButtonProps> = ({
  pronunciation,
  name,
}) => {
  const { speak, speaking } = useSpeechSynthesis();

  const handlePronunciation = () => {
    if (!speaking) {
      speak({ text: name });
    } else {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="max-w-screen-lg w-[100dvw]">
        <button
          onClick={handlePronunciation}
          className="pronunciation-button self-start flex items-center rounded-lg border border-blue-500 text-blue-500 px-3 py-2 hover:bg-blue-50 transition-colors duration-300"
        >
          <span className="mr-2">{pronunciation}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-500"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.06c1.48-.74 2.5-2.26 2.5-4.03z" />
          </svg>
        </button>
        <br />
      </div>
    </div>
  );
};

export default PronunciationButton;
