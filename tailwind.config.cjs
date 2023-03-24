/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": ["1.75rem", "1.5"],
        "7xl": ["4rem", "1.3"],
        "25xl": "6rem",
      },
      lineHeight: {
        thick: "1.3",
      },
      fontFamily: {
        sans: ["Public Sans", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        button: "1px 1px 5px rgba(0, 0, 0, 0.12)",
      },
      spacing: {
        6.5: "1.625rem",
        7.5: "1.875rem",
        10.5: "2.625rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.5: "3.375rem",
        14.5: "3.625rem",
        15: "3.75rem",
        16.5: "4.125rem",
        17.5: "4.375rem",
        21: "5.25rem",
        22.5: "5.625rem",
        23: "5.75rem",
        23.5: "5.875rem",
        24.5: "6.125rem",
        25: "6.25rem",
        25: "6.25rem",
        30: "7.5rem",
        33: "8.25rem",
        34.5: "8.625rem",
        35.5: "8.875rem",
        44.5: "11.125rem",
        45: "11.25rem",
      },
      gap: {
        18.5: "4.625rem",
        50.5: "12.625rem",
      },
      zIndex: {
        70: "70",
        100: "100",
        200: "200",
        300: "300",
        999: "999",
      },
      borderRadius: {
        "1/2": "50%",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        riseIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        collapse: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        moveCard: {
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        drawUnderline: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1 forwards",
        fadeOut: "fadeOut 1.5s forwards",
        riseIn: "riseIn 0.5s forwards",
        collapse: "collapse 1.5s forwards",
        moveCard: "moveCard 500ms forwards",
        drawUnderline: "drawUnderline 500ms forwards",
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
