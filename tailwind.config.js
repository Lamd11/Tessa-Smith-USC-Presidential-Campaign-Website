/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans these files
  ],
  theme: {
    colors: {
      'black-custom': '#141619',
      'grey-custom': '#2C2E3A',
      'navy-blue-custom': '#050A44',
      'blue-custom': '#0A21C0',
      'light-blue-custom': '#00B7FF',
      'light-grey-custom': '#B3B4BD',
      'off-white': '#F0F1FA',
      'white-custom': '#FFFFFF',
      'red-custom': '#FF2D00'
    },
    extend: {},
  },
  plugins: [],
}

