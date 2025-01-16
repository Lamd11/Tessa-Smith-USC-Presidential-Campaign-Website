/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans these files
  ],
  theme: {
    colors: {
      'black-custom': '#1E1E24',         // Deep charcoal for contrast
      'grey-custom': '#3D3B4E',         // Muted grey for accents
      'pink-custom': '#FF69B4',         // Vibrant pink for highlights
      'light-pink-custom': '#FFC0CB',   // Light pink for backgrounds or buttons
      'peach-custom': '#FFD1DC',        // Peachy pink for subtle highlights
      'dark-pink-custom': '#D81B60',    // Bold dark pink for text or icons
      'off-white': '#F9F3F3',           // Soft off-white for clean spaces
      'white-custom': '#FFFFFF',        // Standard white
      'lavender-custom': '#E6E6FA',     // Lavender for soft complementary tones
      'red-custom': '#FF5C5C',          // A red-pink hybrid for warnings or CTA
      'blue-custom': '#1D4ED8',         // Primary blue for Facebook
      'light-blue-custom': '#93C5FD',   // Light blue for hover effects
      'dark-blue-custom': '#1E3A8A',    // Darker blue for LinkedIn
      'green-custom': '#10B981',        // Green for Linktree
      'light-green-custom': '#6EE7B7',  // Light green for hover effects
    },
    extend: {},
  },
  plugins: [],
}

