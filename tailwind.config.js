/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Very-dark-grayish": "#49557e",
        "light-grey": "#747474",
        "lighter-tomato": "#fff4f2",
        "very-light-grey": "#e2e2e2",
        tomato: "#ff6347",
        "dark-greyish": "#262626",
        greyish: "#808080",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        header: "url(/header_img.png)",
      },
      fontSize: {
        "dynamic-xl": "max(4.5vw,22px)",
        "dynamic-sm": "max(1vw,13px)",
        "dynamic-p": "max(1.4vw,16px)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 3s",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
