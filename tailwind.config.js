/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/images/bg-intro-desktop.svg')"
      }
    },
  },
  plugins: [],
}

