/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "philosopher": ['Philosopher', 'sans-serif']
    },
    extend: {
      spacing: {
        '400': '100rem',
        '160': '40rem'
      }
    },
  },
  plugins: [],
}
