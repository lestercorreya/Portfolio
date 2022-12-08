/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "zenDots": ['Zen Dots', 'cursive']
    },
    extend: {
      spacing: {
        '400': '100rem',
        '160': '40rem'
      },
      transitionProperty: {
        'shadow': 'box-shadow',
      }
    },
  },
  plugins: [],
}
