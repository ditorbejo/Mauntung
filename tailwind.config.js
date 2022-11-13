/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bottomBarShadow: "0 -1px 2px  rgba(0, 0, 0, 0.25)",
        topBarShadow: "0 1px 2px rgba(0,0,0,0.25)",
        cardShadow: "0 0 3px 1px rgba(0,0,0,0.15)",
        floatingButtonShadow: "4px 4px 10px rgba(0,0,0,0.25)",
      },
      spacing: {
        4.5: "1.125rem",
        7.5: "1.875rem",
        18: "4.5rem"
      },
      borderRadius: {
        'lg' : '0.625rem'
      },
      colors: {
        biru1: "#00004E",
        biru2: "#000380",
        biru3: "#0303B5",
        biru4: "#8361DF",
        biru5: "#A875FF",
        biru6: "#D6DAFF",
        gray: "#676767",
        pastelBiru:"#B3FAFF",
        pastelRed:"#FFB3B3",
        pastelHijau:"#C6FFB3",
        lightGray: "#CDCDCD",
      },
    },
  },
  plugins: [],
};
