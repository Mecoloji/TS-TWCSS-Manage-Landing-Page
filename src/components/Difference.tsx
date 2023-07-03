import React from "react";
import TabletPattern from "../images/bg-tablet-pattern.svg";
import { differenceArray, differenceArray_2 } from "../data/Data";

// Interface for the properties of each difference item
interface DifferenceItem {
  tag?: number;
  title?: string;
  paragraph?: string;
  mainTitle?: string;
  mainParag?: string;
}

// Difference component
const Difference: React.FC = () => {
  return (
    <div className="flex flex-col max-md:leading-loose leading-relaxed gap-2 relative md:gap-8 lg:gap-14 md:flex-row md:mt-36 mt-20">
      <img
        src={TabletPattern}
        alt=""
        className="absolute md:top-[250px] md:-left-[430px] transition -top-[390px] sm:-top-[600px] -right-[70%] md:w-[60%] -z-10"
      />

      {/* title and text */}
      <div className="flex flex-1 flex-col text-center justify-center md:text-start md:justify-start">
        {/* Mapping over differenceArray_2 */}
        {differenceArray_2.map((item: DifferenceItem, index: number) => (
          <React.Fragment key={index}>
            <h1 className="text-DBlue font-bold md:text-4xl text-3xl">
              {item.mainTitle}
            </h1>
            <p className="mt-4 md:mt-8 text-DGrayishBlue w-[70%] max-md:w-full">
              {item.mainParag}
            </p>
          </React.Fragment>
        ))}
      </div>

      {/* features and lists */}
      <div className="flex flex-col relative flex-1 gap-10 max-md:mt-12 max-md:-mx-6">
        {/* Mapping over differenceArray */}
        {differenceArray.map((item: DifferenceItem, index: number) => (
          <React.Fragment key={index}>
            {/* Individual difference item */}
            <div className="flex gap-4 items-center" key={index}>
              <span className="py-1 flex w-[55px] justify-center rounded-full text-VLightGray bg-BRed">
                {item.tag}
              </span>
              <h1 className="text-DBlue font-semibold max-md:bg-VPaleRed max-md:absolute max-md:py-1 max-md:w-full max-md:pl-10 left-[20px] max-md:-z-10">
                {item.title}
              </h1>
            </div>
            <p className="text-DGrayishBlue pt-4 md:ml-[76px]">
              {item.paragraph}
            </p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Difference;
