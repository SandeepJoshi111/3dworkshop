/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00FFFF", // Electric Blue
        secondary: "#C0C0C0", // Silver
        textPrimary: "#FFFFFF", // White
        primaryBtn: "#6c6c6c",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "black", "cupcake"],
  },
};
