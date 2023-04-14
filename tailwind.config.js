/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './intro-template/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
        'mono': [ 'Space Mono', 'monospace'],
      },
      colors: {
        'dark': '#2D2F3A',
        'semi-dark': '#636786',
        'lightgrey': '#EFEFF0',
        'white': '#FBFBFB',
        // 'accent-1': '#FAFAFA',
        // 'accent-2': '#EAEAEA',
        // 'accent-7': '#333',
        // success: '#0070f3',
        // cyan: '#79FFE1',
        // 'blue-500': '#2276FC',
        // 'yellow-100': '#fef7da',
      },
      // spacing: {
      //   28: '7rem',
      // },
      // letterSpacing: {
      //   tighter: '-.04em',
      // },
      // lineHeight: {
      //   tight: 1.2,
      // },
      fontSize: {
        'head': '25.5px',
        'md': '23.5px',
        'sm': '12px',
        'sm-mono': '11.5px',
        // '5xl': '2.5rem',
        // '6xl': '2.75rem',
        // '7xl': '4.5rem',
        // '8xl': '6.25rem',
      },
      // boxShadow: {
      //   small: '0 5px 10px rgba(0, 0, 0, 0.12)',
      //   medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      // },
    },
  },
  plugins: [],
}
