/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4D9FCB',
        secondary: '#4dcbb8',
        accent: '#d7983c',
        background: '#081426',
        sidebar: '#162135'
      },
    },
  },
  plugins: [],
}