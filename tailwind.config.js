/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--lora--font)", ...fontFamily.sans],
        serif: ["var(--lora-font)", ...fontFamily.serif],
      },
      colors: {
        primary: {
          100: "#083224",
          200: "#ECB96F",
          300: "#E13B3B",
        },
      },
    },
  },
  plugins: [],
};
