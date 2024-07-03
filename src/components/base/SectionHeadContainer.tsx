import React from "react";

interface SectionHeadContainerProps {
  id: string;
  children: React.ReactNode;
}

const SectionHeadContainer: React.FC<SectionHeadContainerProps> = ({
  id,
  children,
}) => {
  return (
    <div
      className="flex flex-col max-w-screen-lg"
      id={id}
    >
      {children}
    </div>
  );
};

export default SectionHeadContainer;
