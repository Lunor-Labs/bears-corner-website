/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bear-brown': {
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f2d8c0',
          300: '#e8bc95',
          400: '#dc9968',
          500: '#d17d47',
          600: '#c3673c',
          700: '#a25234',
          800: '#824331',
          900: '#6a3829',
          950: '#391c14',
        },
        'bear-tan': {
          50: '#fefcf8',
          100: '#fdf6ed',
          200: '#faebd4',
          300: '#f5dab1',
          400: '#efc284',
          500: '#e7a556',
          600: '#d98d3a',
          700: '#b5722f',
          800: '#915b2b',
          900: '#754b26',
          950: '#3f2512',
        },
        'bear-gold': {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        }
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xl': '24px',
      },
    },
  },
  plugins: [],
};