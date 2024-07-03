import React from "react";

interface SectionContentProps {
  children: React.ReactNode;
}

const SectionContent: React.FC<SectionContentProps> = ({ children }) => {
  return (
    <p className="text-lg text-gray-600 mt-4 text-left max-w-screen-lg">
      {children}
    </p>
  );
};

export default SectionContent;
