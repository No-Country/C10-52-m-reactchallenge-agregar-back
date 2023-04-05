/* * @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-sky': '#48CAE4',
        'blue-blue': '#0077B6'
      }
    },
  },
  plugins: [],
}

