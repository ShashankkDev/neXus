import flowbitePlugin from "flowbite/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   monoster: ["Montserrat", "sans-serif"],
      // },
    },
  },
  plugins: [flowbitePlugin],
};
