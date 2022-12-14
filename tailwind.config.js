module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{jsx, js}",
    "./src/features/**/*.{jsx, js}",
    "./src/ui/**/*.{jsx, js}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#969696",
          50: "#DBDBDB",
          100: "#D4D4D4",
          200: "#C4C4C4",
          300: "#B5B5B5",
          400: "#A6A6A6",
          500: "#969696",
          600: "#7A7A7A",
          700: "#5E5E5E",
          800: "#424242",
          900: "#262626",
        },
        blue: {
          50: "#A4CFF8",
          100: "#91C4F7",
          200: "#6BADF4",
          300: "#4695F1",
          400: "#207BEE",
          500: "#1063D5",
          600: "#0D4CAA",
          700: "#0A3780",
          800: "#062355",
          900: "#03112A",
        },
        pink: {
          DEFAULT: "#D51055",
          50: "#FBCADB",
          100: "#FAB7CF",
          200: "#F791B5",
          300: "#F46B9B",
          400: "#F14682",
          500: "#EE2068",
          600: "#D51055",
          700: "#A10C40",
          800: "#6D082B",
          900: "#380417",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
