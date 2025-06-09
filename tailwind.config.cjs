/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '640px',
      'lg': '768px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    extend: {
      colors: {
        'visa-green': {
          DEFAULT: '#00BFA6',
          light: '#00D8B8',
          'feature': '#06E2A4',
          'feature-hover': '#05C292'
        },
        'visa-purple': {
          DEFAULT: '#9B5DE5',
          dark: '#8048c8',
          'feature': '#A259F7',
          'feature-hover': '#8E41F5'
        },
        'visa-gray': {
          50: '#f8f9fa',
          100: '#f5f5f5',
          200: '#eeeeee',
          300: '#e0e0e0',
          800: '#333333',
          900: '#222222'
        }
      },
      spacing: {
        '320': '320px',
        '540': '540px',
        '720': '720px',
        '60': '60px'
      },
      minWidth: theme => theme('spacing'),
      maxWidth: theme => theme('spacing'),
      boxShadow: {
        'card': '0 10px 25px rgba(0, 0, 0, 0.07)',
        'card-hover': '0 15px 30px rgba(0, 0, 0, 0.1)',
        'button': '0 8px 15px rgba(155, 93, 229, 0.3)',
        'button-hover': '0 10px 20px rgba(155, 93, 229, 0.4)',
        'green-button': '0 4px 10px rgba(0, 191, 166, 0.1)',
        'green-button-hover': '0 6px 15px rgba(0, 191, 166, 0.2)',
        'feature': '0 4px 10px rgba(0, 0, 0, 0.1)',
        'feature-hover': '0 6px 15px rgba(0, 0, 0, 0.15)'
      },
      animation: {
        'pulse-shadow': 'pulse-shadow 3s infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-in': 'slide-in 0.3s forwards'
      },
      keyframes: {
        'pulse-shadow': {
          '0%, 100%': {
            boxShadow: '0 8px 15px rgba(155, 93, 229, 0.3)'
          },
          '50%': {
            boxShadow: '0 12px 20px rgba(155, 93, 229, 0.5)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}

