/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    colors: {
      white: "#F2F2F5",

      transparent: "transparent",

      black: {
        900: "#1C1C28",
        700: "#28293D",
        400: "#555770",
        100: "#8F90A6",
      },
      green: {
        800: "#06C270",
        600: "#39D98A",
        400: "#57EBA1",
      },
      purple: {
        800: "#AC5DD9",
      },
      primary: {
        800: "#3568D4",
        600: "#3E7BFA",
        400: "#6698FF",
      },
      blue: {
        800: "#0063F7",
        600: "#5B8DEF",
        400: "#9DBFF9",
      },
      red: {
        800: "#FF3B3B",
        600: "#FF5C5C",
        400: "#FF8080",
      },
      orange: {
        800: "#FF8800",
        600: "#FDAC42",
        400: "#FCCC75",
      },
    },
  },
  plugins: [],
};
