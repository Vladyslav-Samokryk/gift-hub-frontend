/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      black: "#13183A",
      gray: {
        400: "#A6A6A6",
        600: "#A3A3A3",
        900: "#70706D",
      },
      blue: {
        100: "#CBCFDA",
        200: "#AAB5CF",
        600: "#006EFF",
        700: "#0047FF",
        900: "#222D4A",
      },
      purple: {
        100: "#E5E9FD",
        900: "#6F57FF",
      },
      accent: {
        red: "#FF3232",
        bYellow: "#FFD805",
        bOrange: "#FF8C22",
        green: "#00BF13",
        turkus: "#00BCD4",
        blue: "#4495ff",
        ocean: "#303F9F",
        deepGray: "#607D8B",
      },
      background: {
        main: "#F6F7FF",
      },
      star: "#FFD805",
    },
    backgroundImage: {
      "CTA-gradient": "linear-gradient(90deg, #131313 0%, #1700A5 100%)",
      "primary-linear":
        "linear-gradient(89.86deg, #303F9F 0.12%, #9747FF 99.92%)",
    },
    boxShadow: {
      "randomize-result": "-2px 26px 100px 18px #EBEEF4",
      main: "0 4px 20px rgba(50, 64, 161, 0.5)",
      "drop-2": "0px 4px 15px 0px #80808080",
      drop: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    height: {
      card: "472px",
      cardImg: "300px",
      "card-sm": "262px",
      "cardImg-sm": "130px",
      hr: "2px",
    },
    width: {
      card: "320px",
      "card-sm": "168px",
    },
    borderRadius: {
      main: "50px",
    },
  },
  fontFamily: {
    exo2: ["Exo2", "sans-serif"],
    rubik: ["Rubik", "sans-serif"],
  },
  content: {
    bobble1:
      /* eslint-disable  @typescript-eslint/quotes */
      'url("https://main--lighthearted-cocada-0d2e37.netlify.app/img/first_bobble.svg")',
    bobble2:
      'url("https://main--lighthearted-cocada-0d2e37.netlify.app/img/second_bobble.svg")',
    bobble3:
      'url("https://main--lighthearted-cocada-0d2e37.netlify.app/img/third_bobble.svg")',
  },
};
export const plugins = [];
