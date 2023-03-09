/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        button: "1px 1px 5px rgba(0, 0, 0, 0.12)",
      },
      zIndex: {
        100: "100",
        200: "200",
        999: "999",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        riseIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s",
        riseIn: "riseIn 0.5s",
      },
    },
    colors: {
      transparent: "transparent",
      black: {
        DEFAULT: "#000",
      },
      white: {
        DEFAULT: "#fff",
      },
      gray: {
        philippine: "#90878F",
        light: "#767676",
        DEFAULT: "#4D4D4D",
        dark: "#444444",
      },
      blue: {
        cadet: "#5299A3",
        sky: "#7ED9E7",
        DEFAULT: "#447F88",
        dark: "#4F668E",
      },
      yellow: {
        lighter: "#CBBC99",
        light: "#F9DF89",
        DEFAULT: "#FFDF80",
        dark: "#C5C05C",
      },
      orange: {
        light: "#F9B689",
        dark: "#8E764F",
      },
      green: {
        moss: "#858E4F",
        DEFAULT: "#668E4F",
      },
      brown: {
        spicy: "#8E564F",
      },
      purple: {
        light: "#8E4F85",
        DEFAULT: "#BC52AD",
        dark: "#764F8E",
      },
    },
  },
  plugins: [],
};
