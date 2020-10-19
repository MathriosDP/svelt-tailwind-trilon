module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/*.svelte"],
  theme: {
    extend: {
      container: {
        padding: {
          default: '1rem'
        }
      },
      colors: {
        'pink': '#e91e63',
        'black-bg': '#050710',
        'circle-bg': '#302641',
        'roxo-bg': '#7f19e9',
        'input-bg': '#1e0e40'
      },
      fontSize: {
        '5.5xl': '3.5rem',
        '7xl': '5rem',
        '8xl': '6rem', 
      },
      width: {
        '%90': '90%'
      },
      screens: {
        'bg-img': '1440px',
        '2xl': '1520px',
        '3xl': '1620px',
        '4xl': '1720px',
        '5xl': '1820px',
        '6xl': '1920px',
        '7xl': '2120px'
      },
      padding: {
        '28': '7rem',
        '36': '9rem',
        '60': '15rem',
        '70': '20rem'
      },
      margin: {
        '28': '7rem'
      },
      backgroundPosition: {
        'bg-home': '',
      },
      height: {
        '%90': '90%',
        '104': '26rem'
      },
      maxWidth: {
        '8xl': '88rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
