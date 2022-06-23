const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': '392px',
      'sm': '612px',
      'md': '1024px',
      'lg': '1280px',
    },
  extend: {
    fontFamily: {
      'ps': ['public-sans', ...defaultTheme.fontFamily.sans],
    },
         
    fontSize: {
      "4xs": "0.375rem",
      "3xs": "0.5rem",
      "2xs": "0.625rem",
    },
    width: {
      150: '615px',
    },
    height: {
      5.5: "22px",
      34: "8.5rem",
      "200px": "200px"
    },
    maxWidth: {
      20: '5rem',
      40: "10rem",
      67: '16.75rem',
      83: '20.75rem',
      84: '21rem',
      96: '24rem',
      150: "615px",
    },
    minWidth: {
      39: '9.75rem',
      145: '36.25rem',
    },
    spacing: {
      15: '3.75rem',
      21: '5.25rem',
      22: "5.5rem",
      23: '5.75rem',
      39: '9.75rem',
      45: '11.25rem',
      46: '11.5rem',
      47: '11.75rem',
      50: '12.5rem',
      70: '17.5rem',
      97: '24.25rem',
      120: "30rem",
      125: "31.25rem",
      '6/10': "60%",
    },
    colors: {
      "alt-color-1": "#F5B689",
      "alt-color-2": "#7F8A45",
      "alt-color-3": "#F1D77A",
      "alt-color-4": "#464A48",
      "alt-color-5": "#A1A4A3",
      "alt-color-6": "#D1D2D1",
      "alt-color-7": "#747776",
      'image-background': '#FEE080',
      'google-font-color': '#202223',
      'background': '#F2F2F2',
      'accent-text': '#E66C4E'
    },
    boxShadow: {
      popup: "0px 10px 10px -5px #2022230A, 0px 20px 25px -5px #2022231A, 0px 0px 4px 1px #2022231A",
      sm: "0px 1px 2px 0px #0000000D",
      lg: "0px 4px 6px -2px #0000000D, 0px 10px 15px -3px #0000001A"
    },
    lineHeight: {
      4.5: "18px"
    },
    screens: {
      'ssm': '460px',
    }
  },
},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        meeTheme: {
          primary: "#4E868E",
          "primary-content": "#FFFFFF",
          secondary: "#F1D77A",
          "secondary-content": "#F5F6F6",
          accent: "#F5B68926",
          neutral: "#333C4D",

          "base-100": "#FFFFFF", // background

          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#E66C4E",
        },
      },
    ],
  },
};
