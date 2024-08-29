/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyan': '#2E8E84',
        'second': '#47019d',
        'whitey': '#f7fcfb',
        'black': '#212121',
        
      },
    },
  },
  plugins: [],
}

