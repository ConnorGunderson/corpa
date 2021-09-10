module.exports = {
  purge: ['./src/**/*.{js, jsx, ts, tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        slider: '120%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
