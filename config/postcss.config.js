// postcss.config.js
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    tailwindcss({
      config: new URL("./tailwind.config.js", import.meta.url),
    }),
    autoprefixer,
  ],
};
