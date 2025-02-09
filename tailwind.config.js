/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./App.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/assets/images/Group.png')",
      },
      colors: {
        "dark-green": "#3A643B",
        "light-green": "#E4FFE4",
        dark: "#000000",

        black: "#101018",
        border: "#F0F0F0",
        "fade-green": "#EAF2EA",
        border2: "#E7E7E7",
        "fade-green2": "#D9F7D9",
      },
    },
  },
  plugins: [],
};
