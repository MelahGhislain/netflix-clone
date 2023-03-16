/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'movie-img': 'url(./src/assets/home.jpg)'
    },
    extend: {},
  },
  plugins: [],
}
