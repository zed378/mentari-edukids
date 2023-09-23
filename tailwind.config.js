/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    screens: {
      xs: { max: "480px" },
      sm: { max: "640px" },
      md: { max: "768px" },
      mid: { max: "900px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      netbook: { max: "1536px" },
      laptop: { max: "1920px" },
      ultra: "1921px",
    },
  },
  plugins: [],
};
