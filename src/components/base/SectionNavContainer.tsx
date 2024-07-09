/* Global imports */
import React from "react";
/* Scoped imports */
/* Local imports */

interface SectionNavContainerProps {
  children: React.ReactNode;
}

const SectionNavContainer: React.FC<SectionNavContainerProps> = ({
  children,
}) => {
  return (
    <nav className="py-4 w-[100dvw] flex justify-center items-center">
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="bg-gray-100 shadow-md rounded-lg p-4">
          <ul className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-4">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SectionNavContainer;
