/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-marca': '#0a1931',
        'laranja-principal': '#ff6b35',
      }
    }
  },
  plugins: [],
}
