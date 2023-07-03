/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        BeVietnamPro: ["Be Vietnam Pro", "sans-serif"],
      },
    },
    colors: {
      BRed: "hsl(12, 88%, 59%)",
      DBlue: "hsl(228, 39%, 23%)",

      DGrayishBlue: "hsl(227, 12%, 61%)",
      VDarkBlue: "hsl(233, 12%, 13%)",
      VPaleRed: "hsl(13, 100%, 96%)",
      VLightGray: "hsl(0, 0%, 98%)",
    },
  },
  plugins: [],
};
