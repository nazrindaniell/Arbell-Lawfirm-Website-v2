/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      orange: "#ef7324",
      white: "#ffffff",
      black: "#000000",
      "black-200": "#38383a",
      "white-400": "#ccc",
      "white-300": "#d8d8d8",
      "white-200": "#e9ecef",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["DM Serif Display", "serif"],
    },
    container: {
      center: true,
      margin: {
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
      },
      padding: {
        DEFAULT: "2rem",
        lg: "3rem",
      },
      aspectRatio: {
        "3/2": 3 / 2,
      },
    },
    extend: {},
  },
  plugins: [],
};
