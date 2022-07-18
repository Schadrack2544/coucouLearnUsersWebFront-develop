module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.{html,js,ts,tsx}',
    './public/**/*.{html,js}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-blue': '#193059',
        'brand-black': '#363740',
        'brand-yellow': '#FDE32A',
        'brand-gray': '#A4A6B3',
        'gray-scale': '#9FA2B4',
        'accent-light': '#DDE2FF',
      }
    }
  },
  plugins: [],
};
