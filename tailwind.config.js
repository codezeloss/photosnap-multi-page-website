/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "pure-white": "#FFFFFF",
      "custom-grey": "#F5F5F5",
      "light-grey": "#DFDFDF",
      "pure-black": "#000000",
      "spc-orange": "#FFC593",
      "spc-pink": "#BC7198",
      "spc-blue": "#5A77FF",
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
    },
    screens: {
      "1bp": { max: "1074px" },
      "2bp": { max: "910px" },
      "3bp": { max: "700px" },
      "4bp": { max: "484px" },
    },
    extend: {},
  },
  plugins: [],
};
