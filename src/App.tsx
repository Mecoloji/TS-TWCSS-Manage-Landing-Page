import Difference from "./components/Difference";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SimplifySection from "./components/SimplifySection";
import Testimonial from "./components/Testimonial";

import TabletPattern from "./images/bg-tablet-pattern.svg";

function App() {
  return (
    <>
      <div className="h-screen flex flex-col pt-12 px-10 md:px-8 relative overflow-x-hidden">
        <img
          src={TabletPattern}
          alt=""
          className="absolute -top-10 md:-right-[140px] -right-10 -z-10 w-[90%] md:w-[55%]"
        />

        <Navbar />
        <Hero />
        <Difference />
        <Testimonial />

        <div className="w-full text-center mt-12 md:mb-40 mb-8">
          <button className="w-[175px] py-3 bg-BRed rounded-full text-VLightGray shadow-BRed/50 shadow-[_0px_10px_20px] hover:animate-pulse">
            Get Started
          </button>
        </div>
        <SimplifySection />
        <Footer />
      </div>
    </>
  );
}
export default App;
