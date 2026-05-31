/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{ts,tsx}", "./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lavender: '#F0EDFF',
        violet: '#4C1D95',
        teal: '#14B8A6',
        peach: '#FBBF77'
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        karla: ['Karla', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        full: '50%'
      },
      boxShadow: {
        'playful-violet': '0 0 10px 2px #4C1D95',
        'playful-teal': '0 0 10px 2px #14B8A6',
        'playful-peach': '0 0 10px 2px #FBBF77'
      }
    },
  },
  plugins: [],
}

module.exports = config
