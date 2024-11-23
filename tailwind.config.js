/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center:true
    },
    extend: {
      colors:{
        primary: '#2c3e50',
        main:"#1abc9c",
      },
      screens: {
        "2xl":"1320px"
      }
    },
  },
  plugins: [],
}

