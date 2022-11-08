/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bottomBarShadow': '0 -1px 2px  rgba(0, 0, 0, 0.25)',
      }
    },
    colors: {
      'biru1': '#00004E',
      'biru2': '#000380',
      'biru3': '#0303B5',
      'biru4': '#8361DF',
      'biru5': '#A875FF',
      'biru6': '#ffc82c',
      'gray': '#676767',
    },
    
  },
  plugins: [],
}
