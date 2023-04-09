/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-image": "url('./bg.jpg')",
      },
      fontFamily: {
        lora: "'Lora', serif",
        poppins: "'Poppins', sans-serif",
      },
      backgroundColor: {
        main: "#f6f6f6",
      },
      colors: {
        main: "#323235",
      },
    },
  },
  plugins: [],
};
