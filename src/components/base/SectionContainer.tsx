"use client";

/* Global imports */
import React, { useState } from "react";
/* Scoped imports */
/* Local imports */

interface SectionContainerProps {
  id: string;
  title: string;
  children: React.ReactNode;
  depth?: number;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  title,
  children,
  depth = 0,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex flex-col mt-8 max-w-screen-lg ${
        depth > 0 ? "ml-6 border-l-2 border-gray-300 pl-4 box-border" : ""
      }`}
      id={id}
    >
      <button
        type="button"
        className={`py-3 px-4 inline-flex items-center gap-x-2 text-lg font-medium rounded-lg border border-transparent bg-blue-600 ${isCollapsed ? "bg-opacity-70" : ""} text-white hover:bg-blue-700 transition duration-300 ease-in-out`}
        onClick={toggleCollapse}
        aria-expanded={!isCollapsed}
        aria-controls={`${id}-content`}
      >
        {title}
        <svg
          className={`transition-transform duration-300 ease-in-out ${!isCollapsed ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        id={`${id}-content`}
        className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
          isCollapsed ? "max-h-0" : "max-h-fit"
        }`}
        aria-labelledby={id}
      >
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default SectionContainer;
