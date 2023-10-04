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
          400: "#A6A6A6",
          600: '#A3A3A3',
          900: '#70706D'
        },
        blue: {
          100: '#CBCFDA',
          200: '#AAB5CF',
          700: '#0047FF',
        },
        purple: {
          100: '#E5E9FD',
          900: '#6F57FF'
        },
        blue: {
          100: "#CBCFDA",
          300: "#A6B8E8",
          700: "#0047FF"
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
          main: '#F6F7FF',
        },
        star: '#FFD805',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(33deg, #A18CD1 14.90%, rgba(0, 71, 255, 0.27) 35.73%, rgba(160, 150, 242, 0.70) 57.08%, #FBC2EB 85.73%)',
        'gradient-primary-linear': 'linear-gradient(33deg, rgba(48,63,159,1) 0%, rgba(111,87,255,1) 100%)',
        'CTA-gradient': 'linear-gradient(90deg, #131313 0%, #1700A5 100%)',
        "primary-linear":   'linear-gradient(89.86deg, #303F9F 0.12%, #9747FF 99.92%)',
      },
      boxShadow: {
        'randomize-result': '-2px 26px 100px 18px #EBEEF4',
        'main': "0 4px 20px rgba(50, 64, 161, 0.5)",
        'drop-2': '0px 4px 15px 0px #80808080',
        'drop':'0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      height: {
        card: "472px",
        cardImg: "300px",
        hr: "2px",
      },
      width: {
        card: "340px",
        cardImg: "335px",
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