/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    container: {
      center: true, //container classları her zaman ortalanması için yaptık. tek tek yazmak yerine burda tanımladık.
    },

    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },

      colors: {
        'gega-red': '#BC1A45', //renkleri ekledik ve bu renklere key isimleri verdik. bu keyleri class olarak index.html içerisinde kullandık
        'gega-melon': '#FFD369',
        'gega-grey': '#DDDDDD',
        'gega-white': '#F7F7F7',
      },
    },
  },
  plugins: [],
}

