/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
    },
    extend: {
      fontFamily: {
        sans: ["Epilogue", "sans-serif"],
      },
      fontSize: {
        xs: [
          "15px",
          {
            lineHeight: "32px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        sm: [
          "16px",
          {
            lineHeight: "26px",
            letterSpacing: "-2.5px",
            fontWeight: "700",
          },
        ],
        base: [
          "18px",
          {
            lineHeight: "32px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        lg: [
          "18px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.2px",
            fontWeight: "700",
          },
        ],
        xl: [
          "20px",
          {
            lineHeight: "35px",
            letterSpacing: "0px",
            fontWeight: "500",
          },
        ],
        "2xl": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.5px",
            fontWeight: "700",
          },
        ],
        "3xl": [
          "72px",
          {
            lineHeight: "78px",
            letterSpacing: "-1px",
            fontWeight: "700",
          },
        ],
      },
      colors: {
        darkBlue: "hsl(219, 43%, 16%)",
        grey: "hsl(218, 20%, 36%)",
        cream: "hsl(30, 33%, 93%)",
        creamWhite: "hsl(30, 29%, 97%)",
        lightPurple: "hsl(264, 100%, 69%)",
        lightMagenta: "hsl(292, 76%, 54%)",
        lightOrange: "hsl(31, 100%, 65%)",
        gradient:
          "linear-gradient(to right top, #a060ff, #a959fb, #b152f6, #b949f1, #c140eb, #dd2fd6, #f11fc1, #ff16ab, #ff3a85, #ff6367, #ff8853, #ffa84e)",
      },
      width: {
        "w-80": "343px",
      },
    },
  },
  plugins: [],
};
