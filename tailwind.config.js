/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        "cinza-100": "#f2f2f2",
        "cinza-200": "#d9d9d9",
        "cinza-300": "#808080",
        "cinza-400": "#333333",
        "cinza-500": "#262626",
        "cinza-600": "#1a1a1a",
        "cinza-700": "#0d0d0d",
  
        "roxo": "#8284fa",
        "roxo-dark": "#5e60ce",
  
        "azul": "#4ea8d3",
        "azul-dark": "#1e6f9f",
  
        "danger": "#e25858",
      }
    }
  },
  plugins: [],
}