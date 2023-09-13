/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./popup.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sail': ['Sail', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'font-pixel': ['Press Start 2P', 'cursive'], // Ajout de la nouvelle police ici
    },
    extend: {},
  },
  plugins: [],
}
