/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#0F151E",
          200: "#BE301F",
          300: "#E13B3B",
        },
      },
    },
  },
  plugins: [],
};
