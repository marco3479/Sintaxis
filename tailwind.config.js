/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: '#000',
        blue: '#1F51FF',
        yellow: '#f5ed02',
        brown: '#A52A2A',
        purple: '#C724B1',
      },
    },
  },
  plugins: [],
}
