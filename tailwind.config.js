/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          "100%": { transform: "rotateY(180deg)" },
        }
      },
      animation: {
        flip: "flip 500ms",
      },
    },
  },
  plugins: [],
}
