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
        background: {
          main: '#F7F7FF',
        },
        star: '#FFD805',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(33deg, #A18CD1 14.90%, rgba(0, 71, 255, 0.27) 35.73%, rgba(160, 150, 242, 0.70) 57.08%, #FBC2EB 85.73%)',
        'CTA-gradient': 'linear-gradient(90deg, #131313 0%, #1700A5 100%)',
        "primary-linear":   'linear-gradient(89.86deg, #303F9F 0.12%, #9747FF 99.92%)',
      },
      boxShadow: {
        'randomize-result': '-2px 26px 100px 18px #EBEEF4',
        'main': "0 4px 20px rgba(50, 64, 161, 0.5)",
        'drop-2': '0px 4px 15px 0px #80808080',
      },
      height: {
        card: "472px",
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