module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Mangold': {
          DEFAULT: '#EFC139',
          '50': '#FDF6E3',
          '100': '#FBF0D0',
          '200': '#F8E4AA',
          '300': '#F5D984',
          '400': '#F2CD5F',
          '500': '#EFC139',
          '600': '#DEAA12',
          '700': '#AA830E',
          '800': '#bc862d',
          '900': '#423305'
        },
        'dark': {
          DEFAULT: '#000000',
          '50': '#161716'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}