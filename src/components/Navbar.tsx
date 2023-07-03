import { useState, useEffect } from "react";

import logoIcon from "../images/logo.svg";
import closeIcon from "../images/icon-close.svg";
import hamburgerIcon from "../images/icon-hamburger.svg";
import Button from "./Button";
import { navbarArray } from "../data/Data";

// Define the interface for each navbar item
interface NavbarItem {
  title: string;
  link: string;
}

const Navbar: React.FC = () => {
  // State variables to manage the navbar state
  const [isOpen, setIsOpen] = useState<boolean>(false); // Indicate if the navbar is open or closed
  const [inView, setInView] = useState<boolean>(false); // Indicate if the navbar is in view or not

  useEffect(() => {
    // useEffect hook to handle the initial loading of the component
    const handleLoad = () => setInView(true);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* Overlay for the mobile view navbar */}
      <nav
        className={`bg-gradient-to-b from-VDarkBlue/10 to-VDarkBlue/50 
        inset-0 absolute transition duration-500 delay-100 md:hidden 
        ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={() => setIsOpen(false)}
      />
      {/* Main navbar container */}
      <div
        className={`flex justify-center items-center 
        md:justify-between relative transition duration-700 delay-100 
        ${inView ? "md:translate-y-0" : "md:translate-y-[100px]"}`}
      >
        {/* Logo and Hamburger/Close icons */}
        <div className="flex justify-between max-md:w-full">
          <div>
            <a href="/">
              <img src={logoIcon} alt="Logo" />
            </a>
          </div>
          <div className="md:hidden">
            <img
              src={hamburgerIcon}
              alt="Hamburger Icon"
              hidden={isOpen}
              onClick={() => setIsOpen(true)}
              className="cursor-pointer"
            />
            <img
              src={closeIcon}
              alt="Close Icon"
              hidden={!isOpen}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* laptop screen navbar */}
        <div className="justify-center flex max-md:hidden gap-3 lg:gap-6 transition-all">
          {/* Render each navbar item */}
          {navbarArray.map((item: NavbarItem, index: number) => (
            <a
              href={item.link}
              key={index}
              className="cursor-pointer text-DBlue font-medium text-sm hover:text-DBlue/60 transition"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* small screen navbar */}
        <div
          className={`${
            isOpen
              ? "max-md:translate-y-0"
              : "max-md:-translate-y-[500px] max-md:opacity-0"
          }   md:hidden flex flex-col gap-8 absolute top-[70px] 
              text-center bg-VLightGray rounded-md py-8 
              shadow-lg w-full transition duration-500`}
        >
          {/* Rende each navbar item */}
          {navbarArray.map((item: NavbarItem, index: number) => (
            <a
              href={item.link}
              key={index}
              className="cursor-pointer text-DBlue font-medium hover:text-DBlue/60 transition"
            >
              {item.title}
            </a>
          ))}
        </div>
        {/* Button Component */}
        <Button label="Get Starded" />
      </div>
    </>
  );
};
export default Navbar;
