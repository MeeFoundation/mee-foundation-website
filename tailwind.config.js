module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xs": "0.5rem",
        "2xs": "0.625rem",
      },
      maxWidth: {
        40: "10rem",
      },
      spacing: {
        22: "5.5rem",
        120: "30rem",
        125: "31.25rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        meeTheme: {
          primary: "#66CC8A",
          secondary: "#377CFB",
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
