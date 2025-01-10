/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "sora": ["Sora-Regular", "sans-serif"],
        "sora-thin": ["Sora-Thin", "sans-serif"],
        "sora-light": ["Sora-Light", "sans-serif"],
        "sora-extraLight": ["Sora-ExtraLight", "sans-serif"],
        "sora-medium": ["Sora-Medium", "sans-serif"],
        "sora-bold": ["Sora-Bold", "sans-serif"],
        "sora-semiBold": ["Sora-SemiBold", "sans-serif"],
        "sora-extraBold": ["Sora-ExtraBold", "sans-serif"],
      },
      colors: {
        primary: {
          100: "",
          200: "",
        },
        secondary: {},
        accent: {},
        danger: {},
        success: {},
      },
    },
  },
  plugins: [],
};
