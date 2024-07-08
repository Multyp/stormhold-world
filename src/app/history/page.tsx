"use client";

import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/base/SectionHeader";
import imageUrls from "@/constants/imageUrls";

interface Event {
  name: string;
  description: string[];
  duration?: string;
  link: string;
  end?: string[];
  members?: {
    [key: string]: {
      name: string;
      kingdom: string;
      description: string[];
    };
  };
  composition?: {
    total_members: number;
    distribution: {
      [key: string]: number;
    };
    members: string[];
  };
  function?: string[];
}

const historyEvents: Event[] = [
  {
    name: "The War of Shadows",
    description: [
      "The War of Shadows was ignited by a power struggle among the kingdoms of STORMHOLD. It began with a minor territorial dispute between the dwarves of DAWNFALL and the humans of LARIOM. This small spark quickly escalated into a full-scale war, drawing in the elves of MIRLUN and the maritime forces of SHUBORE.",
    ],
    duration: "Twenty years",
    end: [
      "The signing of the Peace of Goldenhall marked the end of the War of Shadows and the beginning of Year 0 AR.",
    ],
    link: "/history/war_of_shadows",
  },
  {
    name: "The Elder's Senate",
    description: [
      "By Year 60 AR, as the kingdoms grew and the need for more inclusive governance became apparent, the High Council was expanded and renamed to the Elder's Senate.",
    ],
    composition: {
      total_members: 12,
      distribution: {
        humans: 3,
        dwarves: 3,
        elves: 3,
        maritime_kingdom: 3,
      },
      members: [
        "Three larionians (two from LARIOM, one from another kingdom)",
        "Three dwarves (two from DAWNFALL, one from another dwarven settlement)",
        "Three elves (two from MIRLUN, one from another elven settlement)",
        "Three shuborians (two from SHUBORE, one from another kingdom",
      ],
    },
    link: "",
    function: [
      "The Senate convenes in GOLDENHALL, where they deliberate on matters of governance, diplomacy, and law. Elections are held every five years, ensuring that each community has a voice in the decision-making process.",
    ],
  },
];

const HistoryPage: React.FC = () => {
  const handleEventClick = (event: Event) => {
    window.location.href = event.link;
  };

  return (
    <div>
      <Head>
        <title>History of STORMHOLD</title>
      </Head>
      <main className="min-h-screen bg-gray-100">
        <Navbar />
        <SectionHeader
          title="The history of STORMHOLD"
          subtitle="A continent of change"
          imageUrl={imageUrls.default}
        />
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">History of STORMHOLD</h2>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              {historyEvents.map((event, index) => (
                <li
                  key={index}
                  className="mb-10 ml-4"
                >
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Event Time
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {event.name}
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {event.description[0]}
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
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
