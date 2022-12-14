/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      'regularScreen': '780px',
    },
    fontFamily: {
      "zenDots": ['Zen Dots', 'cursive'],
      "primary": ['Playfair Display', 'serif']
    },
    extend: {
      colors: {
        'primary': "#009BDF",
        'secondary': "#758398"
      },
      backgroundImage: {
        'home': "url('/static/images/home-background.png')",
        'home-desktop': "url('/static/images/home-background-desktop.png')"
      },
      transitionProperty: {
        'shadow': 'box-shadow',
      }
    },
  },
  plugins: [],
}
