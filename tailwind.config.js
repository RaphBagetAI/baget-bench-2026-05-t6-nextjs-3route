/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        gradientStart: '#7C3AED', // purple
        gradientMid: '#EC4899',   // pink
        gradientEnd: '#F97316',   // orange
        darkSlate: '#0F172A',
        softGray: '#F8FAFC'
      },
      borderRadius: {
        DEFAULT: '12px'
      },
      boxShadow: {
        elevated: '0 4px 16px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}

module.exports = config
