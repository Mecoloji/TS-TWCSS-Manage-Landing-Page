// import FacebookIcon from "../images/icon-facebook.svg";
// import YoutubeIcon from "../images/icon-youtube.svg";
// import TwitterIcon from "../images/icon-twitter.svg";
// import PinterestIcon from "../images/icon-pinterest.svg";
// import InstagramIcon from "../images/icon-instagram.svg";

import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";

import logoIcon from "../images/logo.svg";

import { footerArray } from "../data/Data";
import SearchBar from "./SearchBar";

// interface SocialMedia {
//   name: string;
//   icon: string;
// }

const Footer: React.FC = () => {
  // Get the current year
  const currentYear: number = new Date().getFullYear();
  // const socialMediaData: SocialMedia[] = [
  //   { name: "Facebook", icon: FacebookIcon },
  //   { name: "Twitter", icon: TwitterIcon },
  //   { name: "Instagram",icon: InstagramIcon,},
  //   { name: "Pinterest", icon: PinterestIcon },
  //   { name: "YouTube", icon: YoutubeIcon },
  // ];

  return (
    <div className="flex flex-col md:flex-row bg-VDarkBlue px-20 py-16 text-VLightGray md:-mx-32 md:px-48 -mx-20 md:justify-between items-center">
      {/* Search Bar - Display only for smal screens */}
      <div className="block md:hidden mb-16">
        <SearchBar />
      </div>

      <div className="flex flex-col-reverse md:flex-row max-md:items-center gap-10 md:gap-20">
        {/* Logo and Social Icons */}
        <div className="flex flex-col-reverse md:flex-col justify-between items-center max-md:gap-12">
          <img src={logoIcon} alt="Logo" className="max-md:w-[150px]" />

          {/* Socials Icons */}
          {/* <div className="flex md:gap-2 gap-8 mt-10">
             {socialMediaData.map((item, index) => (
              <a key={index}>
                <img src={item.icon} alt={item.name} />
              </a>
            ))}
          </div> */}
          <div className="flex md:gap-2 gap-8 mt-10">
            {[
              AiFillFacebook,
              AiFillYoutube,
              AiOutlineTwitter,
              AiFillLinkedin,
              AiOutlineInstagram,
            ].map((Icon, index) => (
              <Icon
                key={index}
                size={30}
                className="hover:fill-BRed md:w-6 transition cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Footers LinksArrays */}
        <div className="flex lg:gap-40 md:gap-16 gap-24 max-md:text-sm md:ml-0 lg:ml-18 transition-all justify-center">
          {[footerArray.slice(0, 4), footerArray.slice(4, 7)].map(
            (items, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-col gap-6">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className="hover:text-BRed cursor-pointer transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )
          )}
        </div>
      </div>

      {/* Search Bar and Copyright*/}
      <div className="flex flex-col md:justify-between items-end h-full">
        {/* Search Bar - Displayed only for large screens */}
        <div className="hidden md:block">
          <SearchBar />
        </div>
        {/* Copyright */}
        <span className="text-DGrayishBlue text-sm pt-10">
          Copyright {currentYear}. All Rights Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
