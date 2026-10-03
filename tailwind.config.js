export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        cobalt: {
          DEFAULT: '#2C3480',
          deep: '#2C3480',
          dark: '#1F2459',
          light: '#3C46A8',
        },
        azure: {
          DEFAULT: '#4452E6',
          electric: '#4452E6',
          hover: '#3542D4',
          subtle: '#EEF0FD',
        },
        alabaster: {
          DEFAULT: '#F8FAFC',
          surface: '#FFFFFF',
          muted: '#F1F5F9',
        },
        slate: {
          dark: '#0F172A',
          muted: '#64748B',
          subtle: '#94A3B8',
          border: '#E2E8F0',
        }
      }
    },
  },
  plugins: [],
}