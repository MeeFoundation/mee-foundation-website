const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '612px',
      'md': '1024px',
      'lg': '1280px',
    },
  extend: {
    fontFamily: {
      'ps': ['public-sans', ...defaultTheme.fontFamily.sans],
    },
         
    fontSize: {
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
      40: "10rem",
      67: '16.75rem',
      84: '21rem',
      150: "615px",
    },
    spacing: {
      15: '3.75rem',
      22: "5.5rem",
      120: "30rem",
      125: "31.25rem",
    },
    colors: {
      "alt-color-1": "#F5B689",
      "alt-color-2": "#7F8A45",
      "alt-color-3": "#F1D77A",
      'image-background': '#FEE080',
      'google-font-color': '#202223',
      'background': '#F2F2F2',
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
          "secondary-content": "#535D29",
          accent: "#EA5234",
          neutral: "#333C4D",

          "base-100": "#FFFFFF", // background

          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
