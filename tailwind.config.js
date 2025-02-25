/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#9333EA',  // Purple from Home/About
        'secondary': '#111827', // Dark background from Home/About
        'accent': '#9333EA',
        'accent-light': '#A855F7',
        'accent-dark': '#7E22CE',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #9333EA, #A855F7)',
      }
    },
  },
  plugins: [],
}

