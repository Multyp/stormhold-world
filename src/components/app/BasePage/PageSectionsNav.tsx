"use client";

import React, { useState } from "react";
import SectionNavLinkMobile from "@/components/base/SectionNavLink";
import { Section } from "@/types/pageData";
import SectionNavContainer from "@/components/base/SectionNavContainer";

const SectionNavLink = ({
  href,
  title,
  depth = 0,
}: {
  href: string;
  title: string;
  depth?: number;
}) => (
  <a
    href={href}
    className={`block py-2 px-4 text-gray-700 hover:text-blue-600 hover:font-bold hover:underline transition-colors duration-200 ease-in-out text-sm`}
    style={{ paddingLeft: `${depth * 16 + 16}px` }}
  >
    {title}
  </a>
);

const PageSectionNavLinks = ({ sections }: { sections: Section[] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubsections = () => {
    setIsOpen(!isOpen);
  };

  const renderSections = (sections: Section[], depth = 0) => {
    return sections.map(section => (
      <React.Fragment key={section.id}>
        <SectionNavLink
          href={`#${section.id}`}
          title={section.title}
          depth={depth}
        />
        {section.subsections && renderSections(section.subsections, depth + 1)}
      </React.Fragment>
    ));
  };

  return (
    <>
      {/* Mobile navigation system */}
      <div className="block lg:hidden">
        <SectionNavContainer>
          {sections.map((section: Section) => (
            <React.Fragment key={section.id}>
              <div
                className="flex items-center"
                onClick={toggleSubsections}
                style={{ cursor: "pointer" }}
              >
                <SectionNavLinkMobile
                  href={`#${section.id}`}
                  title={section.title}
                  collapsable={section.subsections ? true : false}
                  isOpen={isOpen}
                  onClick={toggleSubsections}
                />
              </div>
              {isOpen &&
                section.subsections &&
                section.subsections.length > 0 && (
                  <div className="pl-4">
                    {section.subsections.map(subsection => (
                      <SectionNavLinkMobile
                        key={subsection.id}
                        href={`#${subsection.id}`}
                        title={subsection.title}
                      />
                    ))}
                  </div>
                )}
            </React.Fragment>
          ))}
        </SectionNavContainer>
      </div>

      {/* Widescreen navigation system */}
      <div
        className="hidden lg:block fixed right-0 top-1/2 transform -translate-y-1/2 z-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`bg-white border-l border-gray-200 shadow-lg rounded-l-lg transition-all duration-300 ease-in-out ${
            isHovered ? "w-64" : "w-12"
          }`}
        >
          <div className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center text-gray-500 cursor-pointer">
            {!isHovered && (
              <div className=" bg-slate-300 w-fit p-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
            )}
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isHovered ? "opacity-100 max-h-[80vh]" : "opacity-0 max-h-0"
            }`}
          >
            <div className="py-4 overflow-y-auto max-h-[80vh]">
              {renderSections(sections)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageSectionNavLinks;
