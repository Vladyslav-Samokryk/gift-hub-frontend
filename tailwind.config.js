const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#13183A",
        success: {
          DEFAULT: 'green',
        },
        error: {
          DEFAULT: '#CA0928',
        },
        accent: {
          turkus: "#00bcd4",
        },
        primary: {
          200: '#ABB5CF',
          500: '#0047FF',
          700: '#140285',
          DEFAULT: '#13183A'
        },
        secondary: {
          100: '#70706D',
          150: '#4F54631A',
          200: '#DCE0EB',
          300: '#ECF3FD',
        },
        background: {
          header: '#E8E6F3',
          footer: '#D9D9D9',
          main: '#F7F7FF',
        },
        star: '#FFD805',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(33deg, #A18CD1 14.90%, rgba(0, 71, 255, 0.27) 35.73%, rgba(160, 150, 242, 0.70) 57.08%, #FBC2EB 85.73%)',
      },
      boxShadow: {
        'randomize-result': '-2px 26px 100px 18px #EBEEF4',
      }
    },
    fontFamily: {
      sans: ['Helvetica Neue', "Helvetica", "Roboto", "Arial", ...defaultTheme.fontFamily.sans],
      'exo2': ['Exo2', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
}