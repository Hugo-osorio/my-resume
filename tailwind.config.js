const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/components/**/*.tsx', './src/*.tsx', './src/colors.json'],
  theme: {
    colors:{
      primary: '#132C33',
      secondary: '#126E82',
      tertiary: '#51C4D3',
      quaternary: '#D8E3E7',
      transparent: 'rgba(0,0,0,0)'
    },
    extend: {},
  },
  plugins: [
    plugin(require('./src/plugins/defaults'))
  ],
}
