import { FC } from "react";

// Define the SimplifySection component
const SimplifySection: FC = () => {
  // Render the SimplifySection component
  return (
    <div className="bg-BRed md:px-28 sticky md:-mx-12 -mx-20">
      <div className="flex flex-col md:flex-row max-md:text-center max-md:space-y-6 items-center justify-between py-16">
        {/* Heading */}
        <h1 className="text-VLightGray text-3xl max-md:max-w-[250px] font-medium md:w-[40%]">
          Simplify how your team works today.
        </h1>
        <button className="w-[175px] py-3 bg-VLightGray rounded-full text-BRed shadow-BRed/50 shadow-[_0px_10px_20px] hover:bg-VLightGray transition hover:animate-pulse">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SimplifySection;
