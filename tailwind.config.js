/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./themes/hugo-saasify-theme/layouts/**/*.html",
    "./content/**/*.md"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e6e3ff',
          200: '#d1ccff',
          300: '#b5abff',
          400: '#9282ff',
          500: '#6d5aff',
          600: '#4534da',
          700: '#3a2bb8',
          800: '#2f2396',
          900: '#261d7a',
        },
        secondary: {
          50: '#f0fdff',
          100: '#ccf9ff',
          200: '#99f3ff',
          300: '#5ce9ff',
          400: '#08d5f9',
          500: '#00bae6',
          600: '#0095c4',
          700: '#00749e',
          800: '#005b82',
          900: '#004b6b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient-x 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}