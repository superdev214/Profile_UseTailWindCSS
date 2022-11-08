/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", ],
  theme: {
    extend: {
      screen:{
        '2xl' : { 'col' : '(min-width:1400px'},
      },
      backgroundImage: {
        // bodyBG: "url('./public/background.jpg')",
      },
    },
  },
  plugins: [],
};
