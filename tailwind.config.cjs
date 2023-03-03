/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#606D5D",
          secondary: "#D3CDD7",
          accent: "#BC9CB0",
          neutral: "#88958D",
          "base-100": "#CADCD6",
        },
      },
    ],
  },
};
