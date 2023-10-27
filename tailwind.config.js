/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1f1f1f",
        darkgray: "#3F3F3F",
        lilac: "#A892EE",
      },
    },
  },
  plugins: [],
};