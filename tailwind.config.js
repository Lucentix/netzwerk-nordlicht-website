/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nord-dark': '#2E3440',
        'nord-dark-lighter': '#3B4252',
        'nord-blue': '#5E81AC',
        'nord-light': '#E5E9F0',
        'nord-accent': '#88C0D0',
        'nord-green': '#A3BE8C',
        'nord-red': '#BF616A',
        'nord-orange': '#D08770',
        'nord-yellow': '#EBCB8B',
        'nord-purple': '#B48EAD'
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'heading': ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(136, 192, 208, 0.5)',
        'glow-accent': '0 0 15px rgba(94, 129, 172, 0.5)',
      },
    },
  },
  plugins: [],
}