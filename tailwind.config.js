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
        black: '#13183A',
        link: '#006EFF',
        deepBlue: '#222D4A',
        gray: {
          600: '#A3A3A3',
          900: '#70706D'
        },
        blue: {
          100: '#CBCFDA',
          200: '#AAB5CF',
        },
        primary: {
          200: '#ABB5CF',
          300: '#A6B8E8',
          700: '#0047FF',
          800: '#303F9F',
          900: '#140285'
        },
        purple: {
          100: '#E5E9FD',
          900: '#6F57FF'
        },
        accent: {
          red: '#FF3232',
          bYellow: '#FFD805',
          bOrange: '#FF8C22',
          green: '#00BF13',
          turkus: '#00BCD4',
          blue: "#4495ff",
        },
        accent: {
          red: '#FF3232',
          bYellow: '#FFD805',
          bOrange: '#FF8C22',
          green: '#00BF13',
          turkus: '#00BCD4',
          blue: "#4495ff",
        },
        background: {
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
      },
      height: {
        card: "438px",
        cardImg: "300px",
        hr: "2px",
      },
      width: {
        cardImg: "317px",
      },
    },
    fontFamily: {
      sans: ['Helvetica Neue', "Helvetica", "Roboto", "Arial", ...defaultTheme.fontFamily.sans],
      'exo2': ['Exo2', 'sans-serif'],
      'rubik': ['Rubik', 'sans-serif'],
    },
  },
  plugins: [],
}