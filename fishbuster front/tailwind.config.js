/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sail': ['Sail', 'cursive'],
      'roboto': ['Roboto', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
