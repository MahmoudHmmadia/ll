/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        gradient_main: "linear-gradient(90deg, #040708 0%, #070c0e 100%)",
        gradient_cool: "linear-gradient(90deg, #cca756 0%, #cca733 100%)",
      },
      colors: {
        main: "#cca756",
        alt: "#520e0c",
      },
    },
  },
  plugins: [],
};
