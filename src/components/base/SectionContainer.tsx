import React from "react";

interface SectionContentProps {
  id: string;
  children: React.ReactNode;
}

const SectionContainer: React.FC<SectionContentProps> = ({ id, children }) => {
  return (
    <div
      className="flex flex-col mt-8"
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
