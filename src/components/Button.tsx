// function Button() {
//   return (
//     <button className="hidden md:block px-8 py-3 bg-BRed rounded-full text-VLightGray shadow-BRed/50 shadow-[_0px_6px_15px] hover:animate-pulse">
//       Get Started
//     </button>
//   );
// }

// export default Button;

import { FC } from "react";

// Button component with a label prop for displaying a button element
const Button: FC<{ label: string }> = ({ label }) => {
  return (
    <button
      type="button"
      className="hidden md:block px-8 py-3 bg-BRed rounded-full text-VLightGray shadow-BRed/50 shadow-[_0px_6px_15px] hover:animate-pulse"
    >
      {label}
    </button>
  );
};

export default Button;
