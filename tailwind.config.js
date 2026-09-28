/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#111111',
          'near-black': '#181818',
          white: '#FFFFFF',
          soft: '#F6F6F4',
          gray: '#EAEAEA',
          'gray-dark': '#6B7280',
          accent: '#D99A32',
        },
        status: {
          available: {
            text: '#16A34A',
            bg: '#DCFCE7',
          },
          unavailable: {
            text: '#DC2626',
            bg: '#FEE2E2',
          },
          pending: {
            text: '#D97706',
            bg: '#FEF3C7',
          },
          info: {
            text: '#2563EB',
            bg: '#EFF6FF',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
