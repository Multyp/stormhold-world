/* Global imports */
import React from "react";
/* Scoped imports */
/* Local imports */

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
