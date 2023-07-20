module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["vue", "prettier"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
};
