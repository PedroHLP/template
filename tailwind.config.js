/** @type {import('tailwindcss').Config} */
const { createPreset } = require('tailwindcss-shadcn-ui');

module.exports = {
  presets: [ createPreset() ],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./public/**/*.svg",
  ],
  darkMode: "class",
  theme: {
    extend: {
    },
  },
  plugins: [
  ],
}
