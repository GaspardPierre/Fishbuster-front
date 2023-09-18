/** @type {import('tailwindcss').Config} */
module.exports  = {
  important: '#root',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sail': ['Sail', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'font-pixel': ['"Press Start 2P"', 'cursive'], // Ajout de la nouvelle police ici
    },
    fontSize: {
      sm: '0.5rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {},
  },
  plugins: [],
}
