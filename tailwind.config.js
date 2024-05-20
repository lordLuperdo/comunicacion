/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      trasform:{
        'espejo-x':'scaleX(-1)'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.espejo-x': {
          transform: 'scaleX(-1)',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

