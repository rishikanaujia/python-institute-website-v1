/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4584b6',
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d3d3d3',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#0a0a0a',
          950: '#030303',
        },
        secondary: {
          DEFAULT: '#ffde57',
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d3d3d3',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#0a0a0a',
          950: '#030303',
        },
        accent: {
          DEFAULT: '',
          50: '#f8f8f8',
          100: '#e8e8e8',
          200: '#d3d3d3',
          300: '#a3a3a3',
          400: '#737373',
          500: '#525252',
          600: '#404040',
          700: '#262626',
          800: '#171717',
          900: '#0a0a0a',
          950: '#030303',
        },
      },
      fontFamily: {
        sans: ['Roboto, sans-serif', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Open Sans, sans-serif', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Open Sans, sans-serif', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      aspectRatio: {
        'portrait': '3/4',
        'landscape': '4/3',
        'ultrawide': '21/9',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
    },
  },
  plugins: [],
}