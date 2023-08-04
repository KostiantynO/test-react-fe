/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      desktop: '1440px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        desktop: '5rem',
      },
    },
  },

  plugins: [],
};
