
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#16A34A',
          hover: '#15803D',
        },
        green: {
          50: '#ECFDF5',
        },
        slate: {
          50: '#F8FAFC',
          200: '#E2E8F0',
          500: '#64748B',
          600: '#334155',
          900: '#0F172A',
        },
        accent: {
          DEFAULT: '#0EA5E9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
