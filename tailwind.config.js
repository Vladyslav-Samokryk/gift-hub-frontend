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
      },
      background: {
        main: "#F7F7FF",
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
      hr: "2px",
    },
    width: {
      cardImg: "317px",
    },
  },
  fontFamily: {
    exo2: ["Exo2", "sans-serif"],
    rubik: ["Rubik", "sans-serif"],
  },
  content: {
    // eslint-disable-next-line prettier/prettier
    firstBobble: "url(\"src/shared/assets/img/secretGift/first_bobble.svg\")",
    // eslint-disable-next-line prettier/prettier
    secondBobble: "url(\"src/shared/assets/img/secretGift/second_bobble.svg\")",
    // eslint-disable-next-line prettier/prettier
    thirdBobble: "url(\"src/shared/assets/img/secretGift/third_bobble.svg\")",
  },
};
export const plugins = [];
