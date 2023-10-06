/** @type {import("prettier").Options} */
export default {
  printWidth: 80,
  trailingComma: "all",
  singleQuote: false,
  htmlWhitespaceSensitivity: "css",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.js",
};
