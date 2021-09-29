module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      custom: 'red',
      // ...
    },

    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
