/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora-Regular", "sans-serif"],
        "sora-thin": ["Sora-Thin", "sans-serif"],
        "sora-light": ["Sora-Light", "sans-serif"],
        "sora-extraLight": ["Sora-ExtraLight", "sans-serif"],
        "sora-medium": ["Sora-Medium", "sans-serif"],
        "sora-bold": ["Sora-Bold", "sans-serif"],
        "sora-semiBold": ["Sora-SemiBold", "sans-serif"],
        "sora-extraBold": ["Sora-ExtraBold", "sans-serif"],
      },
      colors: {
        // primary mostly for primary actions e.g buttons
        primary: {
          // 100 : hover state
          100: "#C67C4E",
          // 200 : selecting
          200: "",
          // 300 : active state
          300: "#C67C4E",
        },
        // secondary : backgrounds,borders,alternating buttons styles
        secondary: {
          // card background
          100: "#313131",

          // 200 : links
          200: "#F2F2F2",

          //300 : icons,labels
          300: "#9B9B9B",
        },
        // accent : decorative icons
        accent: {},
        danger: {
          100: "#FFCDD2", // light red  : soft warning - backgrounds/alerts
          200: "#E57373", // medium red : medium warning - emphasized text in alerts
          300: "#D32F2F", // dark red : strong warning - delete buttons
        },
        success: {},
      },
    },
  },
  plugins: [],
};
