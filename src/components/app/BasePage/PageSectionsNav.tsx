"use client";

import React, { useState } from "react";
import SectionNavLink from "@/components/base/SectionNavLink";
import { Section } from "@/types/pageData";

const PageSectionNavLinks = ({ section }: { section: Section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubsections = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment key={section.id}>
      <div
        className="flex items-center"
        onClick={toggleSubsections}
        style={{ cursor: "pointer" }}
      >
        <SectionNavLink
          href={`#${section.id}`}
          title={section.title}
          collapsable={section.subsections ? true : false}
          isOpen={isOpen}
          onClick={toggleSubsections}
        />
      </div>
      {isOpen && section.subsections && section.subsections.length > 0 && (
        <div className="pl-4">
          {section.subsections.map(subsection => (
            <SectionNavLink
              key={subsection.id}
              href={`#${subsection.id}`}
              title={subsection.title}
            />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default PageSectionNavLinks;
