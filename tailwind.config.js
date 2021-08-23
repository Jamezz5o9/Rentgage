module.exports = {
  purge: [
    './src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        app: {
          'light-blue': '#D9E7FF',
          'dark-blue': '#224E9C',
          'text-blue': '#0F2F66',
          'text-green': '#3B7980;',
          'main-blue': '#005CE6'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
