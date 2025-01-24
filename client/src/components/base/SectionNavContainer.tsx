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
    <nav className="py-4 w-[100dvw] flex justify-center items-start">
      <div className="w-full max-w-screen-lg flex">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="bg-gray-100 shadow-md rounded-lg p-4">
            <ul className="space-y-2">
              {" "}
              {/* Vertical spacing between links */}
              {children}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SectionNavContainer;
