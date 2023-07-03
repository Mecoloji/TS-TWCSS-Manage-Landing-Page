import Illustration from "../images/illustration-intro.svg";
import Button from "./Button";
import { heroData } from "../data/Data";

const Hero: React.FC = () => {
  return (
    <div className="md:mt-28 mt-10 leading-loose flex flex-col-reverse md:flex-row md:gap-8 lg:gap-14 items-center">
      {/* title and text section */}
      {heroData.map((section, index: number) => ( // Iterating over the heroData array and mapping each element to a section
        <div
          className="flex flex-col items-center md:items-start text-center md:text-start flex-1"
          key={index}
        >
          <h1 className="text-DBlue text-3xl lg:text-5xl md:text-4xl leading-[40px] lg:leading-[55px] md:leading-[45px] font-bold">
            {section.title}
          </h1>
          <p className="mt-2 mb-8 md:my-8 text-DGrayishBlue w-[70%] max-md:w-full">
            {section.description}
          </p>
          <Button label="Get Starded" /> {/*Rendering the Button component with the label "Get Started"*/}
        </div>
      ))}
      {/* image and graph section */}
      <div className="flex flex-1">
        <img src={Illustration} alt="Illustration" />
      </div>
    </div>
  );
};

export default Hero;
