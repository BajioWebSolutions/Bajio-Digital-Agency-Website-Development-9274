/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0d1629',
          800: '#122040',
          700: '#172a56',
          600: '#1e3569',
        },
        teal: {
          500: '#29b2a2',
          600: '#21a090',
          700: '#198f80',
          800: '#147d6f',
        },
        primary: {
          50: '#e6f7f6',
          100: '#c3eae7',
          500: '#29b2a2',
          600: '#21a090',
          700: '#198f80',
          800: '#147d6f',
          900: '#0e6a5e',
        },
        secondary: {
          50: '#e6f1f9',
          100: '#cce3f3',
          500: '#2196f3',
          600: '#1976d2',
          700: '#1565c0',
          800: '#0d47a1',
          900: '#0a3880',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}