import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({
          config: resolve(__dirname, "tailwind.config.js"),
        }),
        autoprefixer,
      ],
    },
  },
  server: {
    port: 8080,
  },
});
