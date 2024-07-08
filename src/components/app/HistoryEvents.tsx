"use client";

import React from "react";
import SectionHeader from "@/components/base/SectionHeader";
import imageUrls from "@/constants/imageUrls";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Event {
  title: string;
  excerpt: string;
  duration: string;
  link: string;
}

interface HistoryEventsProps {
  events: Event[];
}

const HistoryEvents: React.FC<HistoryEventsProps> = ({ events }) => {
  const handleEventClick = (event: Event) => {
    window.location.href = event.link;
  };

  return (
    <div>
      <Navbar />
      <SectionHeader
        title="The history of STORMHOLD"
        subtitle="A continent of change"
        imageUrl={imageUrls.book}
      />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">History of STORMHOLD</h2>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            {events.map((event, index) => (
              <li
                key={index}
                className="mb-10 ml-4"
              >
                <div className="absolute w-3 h-3 bg-emerald-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
                  {event.duration}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {event.title}
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {event.excerpt}
                </p>
                <button
                  onClick={() => handleEventClick(event)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more
                  <svg
                    className="w-3 h-3 ml-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HistoryEvents;
