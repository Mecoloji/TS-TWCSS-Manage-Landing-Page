import { motion } from "framer-motion";
import { testimonialData } from "../data/Data";
import { useState, TouchEvent } from "react";
// import { motion, Variants } from "framer-motion";
// import { fadeIn } from "../utils/motion";

// Define interface for testimonial item
interface TestimonialItem {
  avatar: string;
  name: string;
  quotes: string;
}

// Define Testimonial component
const Testimonial: React.FC = () => {
  const [isSelected, setIsSelected] = useState<number>(0); // Currently selected testimonial index
  const [touchStart, setTouchStart] = useState<number | null>(null); // Starting position of touch event
  const [touchEnd, setTouchEnd] = useState<number | null>(null); // Ending position of touch event
  const [direction, setDirection] = useState<string>(""); // Swipe direction

  // const minSwipeDistance: number = 50;
  // Minimum distance required for a swipe gesture
  const minSwipeDistance = 50;

  // Event touch for touch start event
  const onTouchStart = (e: TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Event handler for touch move event
  const onTouchMove = (e: TouchEvent<HTMLDivElement>): void =>
    setTouchEnd(e.targetTouches[0].clientX);

  // Event handler for touch end event
  const onTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;
    const distance: number = touchStart - touchEnd;

    // Determine swipe direction based on the distance
    if (distance > minSwipeDistance) {
      setDirection("right");
    } else if (distance < -minSwipeDistance) {
      setDirection("left");
    }
    const isLeftSwipe: boolean = distance > minSwipeDistance;
    const isRightSwipe: boolean = distance < -minSwipeDistance;

    // Change selected testimonial based on swipe direction
    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe &&
        isSelected < 3 &&
        setIsSelected((prev: number) => prev + 1);
      isRightSwipe &&
        isSelected >= 1 &&
        setIsSelected((prev: number) => prev - 1);
    }
  };

  // const fadeInVariants: Variants = fadeIn(direction, "spring", 0, 0.5);

  return (
    <div className="flex flex-col items-center mt-32">
      <h1 className="text-DBlue mb-12 font-bold md:text-4xl text-3xl">
        {/* What they've said */}
        What they&apos;ve said
      </h1>

      {/* Testimonial container for larger screens */}
      <div className="flex items-center overflow-x-scroll w-screen max-md:hidden">
        <div className="flex gap-6 mx-auto px-20">
          {/* Map over testimonial data and display each testimonial */}
          {testimonialData.map((item: TestimonialItem, index: number) => (
            <div
              key={index}
              className="flex flex-col md:w-[520px] max-md:touch-pan-x text-center"
            >
              {/* Testimonial content */}
              <div className="bg-VLightGray px-8 rounded-md mt-16 flex flex-col items-center relative">
                <img
                  src={item.avatar}
                  className="w-[75px] absolute -top-[15%] md:-top-[20%]"
                />

                <h1 className="text-DBlue font-bold mt-10 py-5">{item.name}</h1>
                <p className="leading-relaxed text-gray-400 pb-8">
                  {item.quotes}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial container for smaller screens */}
      <div className="md:hidden flex">
        {/* Map over testimonial data and display each testimonial with fading animation */}
        {testimonialData.map((item: TestimonialItem, index: number) => (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              duration: 0.5,
            }}
            key={index}
            className={`flex flex-col min-w-[350px] md:w-[500px] max-md:touch-pan-x text-center ${
              isSelected !== index && "hidden"
            }`}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="bg-VLightGray px-8 rounded-md mt-16 flex flex-col items-center relative">
              <img
                src={item.avatar}
                className="w-[75px] absolute -top-[15%] md:-top-[20%]"
              />

              <h1 className="text-DBlue font-bold mt-10 py-5">{item.name}</h1>
              <p className="leading-relaxed text-gray-400 pb-8">
                {item.quotes}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonial navigation buttons for smaller screens */}
      <div className="flex md:hidden pt-7 gap-1">
        {/* Render navigation buttons for each testimonial */}
        {testimonialData.map((_item: TestimonialItem, index: number) => (
          <button
            key={index}
            className={`w-[10px] h-[10px] rounded-full transition border border-BRed ${
              index === isSelected && "bg-BRed"
            }`}
            onClick={() => setIsSelected(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
