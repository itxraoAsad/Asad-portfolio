/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brown: "#53423e",
        lightBrown: "#645550",
        darkBrown: "#2c2523",
        black: "#1e1917",
        white: "#f1e1d9",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#0091b3",
        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#d28422",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",
      },
      fontFamily: {
        body: ['"Josefin Sans"', 'sans-serif'],
        special: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'brown-glow': '0 4px 15px rgba(83, 66, 62, 0.6)',
        'cyan-glow': '0px 0px 20px 0px  rgba(94, 206, 220, 0.5)',
        'orange-soft': '0 4px 12px rgba(251, 151, 24, 0.5)',
        'dark-deep': '0 6px 20px rgba(30, 25, 23, 0.9)',
        'grey-glow': '0 2px 10px rgba(151, 133, 128, 0.4)',
      },
    },
  },
  plugins: [],
}
