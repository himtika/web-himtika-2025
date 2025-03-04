/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jakartasans: ["var(--font-plus-jakarta-sans)", "sans-serif"],
        pixelify: ["var(--font-pixelify-sans)", "serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purpleNavbar: "#CB9DF0",
        pinkNavbar: "#F0C1E1", 
        yellowBright: "#FFF9BF",
        yellowBG: "#FFFBD7",
        purple: "#C986FF",
        darkPurple: "#4B0088",
        chatAnonymBG: "#FFB3E7",
        songfessBG: "#F5E8FF",
        podcastBG: "#EDFAFF",
        purpleCss: "#7E22CE",
        purpleSongfess: "#FFEEFA",
      },
    },
  },
  plugins: [],
};
