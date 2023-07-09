/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/tailwind-datepicker-react/dist/**/*.js'],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#495E57',
        primaryYellow: '#F4CE14',
        lightOrange: '#EE9972',
        lightPeach: '#FBDABB',
        highlightGrey: '#EDEFEE',
        highlightBlack: '#333',
      },
      fontFamily: {
        markazi: ['Markazi Text', 'serif'],
        karla: ['Karla', 'sans-serif'],
        karlaItalic: ['Karla-Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
