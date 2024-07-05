"use client";

import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/base/SectionHeader";
import imageUrls from "@/constants/imageUrls";

interface Event {
  name: string;
  description: string[];
  duration?: string;
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
  },
  {
    name: "The High Council",
    description: [
      "To ensure that such a devastating conflict would never occur again, the four leaders established the High Council, a governing body representing the major kingdoms of STORMHOLD.",
    ],
    members: {
      human_leader: {
        name: "Lady Aveline Stormguard",
        kingdom: "LARIOM",
        description: [
          "A wise and charismatic human leader who recognized the futility of prolonged conflict.",
        ],
      },
      dwarven_leader: {
        name: "King Thrain Stonehammer",
        kingdom: "DAWNFALL",
        description: [
          "A steadfast and honorable dwarf king who sought to protect his people and their ancient mines.",
        ],
      },
      elven_leader: {
        name: "Elder Alaric Melith",
        kingdom: "MIRLUN",
        description: [
          "A powerful elven enchantress with deep connections to the natural world and a desire for harmony. He is the ancestor of Princess Typhania Melith.",
        ],
      },
      maritime_leader: {
        name: "Admiral Isolde Frostwind",
        kingdom: "SHUBORE",
        description: [
          "A skilled and strategic naval commander who understood the importance of unity for maritime prosperity.",
        ],
      },
    },
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
    function: [
      "The Senate convenes in GOLDENHALL, where they deliberate on matters of governance, diplomacy, and law. Elections are held every five years, ensuring that each community has a voice in the decision-making process.",
    ],
  },
];

const HistoryPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
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
            {/*selectedEvent && (
              <div className="mt-8 p-6 bg-white rounded shadow">
                <h3 className="text-2xl font-bold">{selectedEvent.name}</h3>
                {selectedEvent.description.map((desc, idx) => (
                  <p
                    key={idx}
                    className="mt-2"
                  >
                    {desc}
                  </p>
                ))}
                {selectedEvent.duration && (
                  <p className="mt-2 font-semibold">
                    Duration: {selectedEvent.duration}
                  </p>
                )}
                {selectedEvent.end && (
                  <div className="mt-2">
                    {selectedEvent.end.map((endDesc, idx) => (
                      <p key={idx}>{endDesc}</p>
                    ))}
                  </div>
                )}
                {selectedEvent.members && (
                  <div className="mt-2">
                    <h4 className="text-xl font-semibold">Members:</h4>
                    {Object.entries(selectedEvent.members).map(
                      ([role, member], idx) => (
                        <div
                          key={idx}
                          className="mt-2"
                        >
                          <p className="font-semibold">
                            {role.replace(/_/g, " ")}:
                          </p>
                          <p>
                            {member.name} ({member.kingdom})
                          </p>
                          {member.description.map((desc, idx2) => (
                            <p
                              key={idx2}
                              className="ml-4"
                            >
                              {desc}
                            </p>
                          ))}
                        </div>
                      ),
                    )}
                  </div>
                )}
                {selectedEvent.composition && (
                  <div className="mt-2">
                    <h4 className="text-xl font-semibold">Composition:</h4>
                    <p>
                      Total Members: {selectedEvent.composition.total_members}
                    </p>
                    <p>Distribution:</p>
                    <ul className="list-disc ml-4">
                      {Object.entries(
                        selectedEvent.composition.distribution,
                      ).map(([group, count], idx) => (
                        <li key={idx}>
                          {group}: {count}
                        </li>
                      ))}
                    </ul>
                    <p>Members:</p>
                    <ul className="list-disc ml-4">
                      {selectedEvent.composition.members.map(
                        (memberDesc, idx) => (
                          <li key={idx}>{memberDesc}</li>
                        ),
                      )}
                    </ul>
                  </div>
                )}
                {selectedEvent.function && (
                  <div className="mt-2">
                    <h4 className="text-xl font-semibold">Function:</h4>
                    {selectedEvent.function.map((funcDesc, idx) => (
                      <p key={idx}>{funcDesc}</p>
                    ))}
                  </div>
                )}
              </div>
            )*/}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HistoryPage;
