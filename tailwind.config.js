/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-color': "#1F1F1F",
        'secandary-color':"#545454",
        "white-color":"#fff"

      },
      fontFamily: {
        inter: ["Inter"],
      },
      screens: {
        xs:"0",
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
}
