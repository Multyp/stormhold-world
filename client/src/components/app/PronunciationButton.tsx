"use client";

/* Global imports */
import React, { useState, useEffect } from "react";
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
  const [speaking, setSpeaking] = useState(false);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => voice.lang.startsWith("en"));

      setVoice(englishVoice || voices[0]);
    };

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();
  }, []);

  const handlePronunciation = () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(name);
      utterance.voice = voice;
      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="max-w-screen-lg">
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
