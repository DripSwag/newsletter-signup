/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tomato: "#ff6257",
        darkSlate: "#242742",
        charcoal: "#36384e",
        grey: "#9294a0",
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
};
