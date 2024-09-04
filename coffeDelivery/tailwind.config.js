/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffe: {
          100: "#FAFAFA",
          200: "#EBE5F9",
          300: "#8047F8",
          400: "#F1E9C9",
          500: "#C47F17",
        },
      },
    },
  },
  plugins: [],
};
