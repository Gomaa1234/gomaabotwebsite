/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#90B0EE',
        secondary: '#5983D2',
        tertiary: '#44639E',
        white: '#f2f3ee',
      }
    },
  },
  plugins: [],
}

