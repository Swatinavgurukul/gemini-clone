/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    spacing: {
      '128': '32rem',
    },
    boxShadow: {
      card: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    borderRadius: {
      xl: '1rem',
    },
  },
},
  plugins: [],
}

