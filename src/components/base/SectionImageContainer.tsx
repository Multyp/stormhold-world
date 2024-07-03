import React from "react";

interface SectionImageContainerProps {
  children: React.ReactNode;
}

const SectionImageContainer: React.FC<SectionImageContainerProps> = ({
  children,
}) => {
  return (
    <div className="mt-8 mx-4 w-full flex justify-center items-center">
      <div className="relative rounded-lg shadow-lg max-w-screen-lg w-[100dvw] h-1/2">
        {children}
      </div>
    </div>
  );
};

export default SectionImageContainer;
