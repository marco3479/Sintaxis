/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      brown: '#A52A2A',
      black: '#000',
      blue: '#1F51FF',
      purple: '#C724B1'
    },
    extend: {},
  },
  plugins: [],
}
