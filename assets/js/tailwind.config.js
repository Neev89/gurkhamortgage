const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1170px',
      xl: '1300px',
    },
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    textColor: {
      'base-color': '#77838f',
      'white': '#fff',
      'black': '#000',
      primary: '#a52978'
    },
    colors: {
      primary: '#a52978',
      'black': '#000',
    },
    extend: {
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  },
  variants: {},
  plugins: []
};
