/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': 'rgba(241, 243, 255, 1)',
        'lime-green': 'rgba(92, 184, 95, 1)',
        'lime-green-hover': 'rgb(45, 90, 47)',
        'blue': 'rgba(13, 40, 166, 1)',
        'blue-bcr': '#0C28A5',
        'dark-blue-bcr': '#081B6E',
      },
    },
  },
  plugins: [],
}

