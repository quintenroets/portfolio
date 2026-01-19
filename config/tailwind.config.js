/** @type {import('tailwindcss').Config} */
import aspectRatio from "@tailwindcss/aspect-ratio";
import { fileURLToPath } from "url";
import { resolve } from "path";

const rootDir = fileURLToPath(new URL("..", import.meta.url));

export default {
  content: [
    resolve(rootDir, "src/**/*.{vue,js,jsx,ts,tsx}"),
    resolve(rootDir, "src/assets/css/tailwind.css"),
    resolve(rootDir, "index.html"),
  ],
  theme: {
    extend: {
      colors: {
        black: "#222222",
        blue: "#1067a0",
        "hover-blue": "#4097f0",
        dark: "#2c3e50",
        sidebargray: "#e5e7eb",
        "background-white": "#f6f9fc",
        "almost-white": "#f1f4f7",
      },
      width: {
        420: "420px",
      },
      height: {
        420: "420px",
      },
    },
  },
  plugins: [aspectRatio],
};
