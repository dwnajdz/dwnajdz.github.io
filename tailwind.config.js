/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './template/**/*.{html,js}',
    './_layouts/**/*.html',
  ],
  theme: {
    extend: {
      display: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
