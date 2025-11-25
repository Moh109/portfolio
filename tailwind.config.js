/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'mac-blue': '#007aff',
        'mac-gray': '#5e6e7e',
        'mac-dark': '#232526',
        'mac-light': '#f8f8fa',
      },
      backdropBlur: {
        'mac': '15px',
      },
      boxShadow: {
        'mac': '0 8px 40px 8px rgba(0,0,0,0.18), 0 1.5px 8px rgba(0,0,0,0.10)',
        'mac-dark': '0 4px 32px rgba(0,0,0,0.30)',
      },
      animation: {
        'bounce-gentle': 'bounce 0.6s ease-in-out',
        'fade-in': 'fadeIn 0.7s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
