/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        black: "#222222",
        blue: "#2980b9",
        dark: "#2c3e50",
        sidebargray: "#e5e7eb",
        "background-blue": "#f6f9fc",
      },
      width: {
        420: "420px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
