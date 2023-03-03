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
          primary: "#97D4EA",
          secondary: "#9c8952",
          accent: "#fac4bb",
          neutral: "#88BED1",
          "base-100": "#bdd4de",
        },
      },
    ],
  },
};
