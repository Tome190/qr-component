 /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    colors: {
      white: 'hsl(0, 0%, 100%)',
      lightgray: 'hsl(212, 45%, 89%)',
      grayishblue: 'hsl(220, 15%, 55%)',
      darkblue: 'hsl(218, 44%, 22%)'
    },
   
    extend: {
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif']
      },
    },
  },
  plugins: [],
}