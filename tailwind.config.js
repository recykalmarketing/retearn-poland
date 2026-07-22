/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6a398c',
        'primary-dark': '#4a2866',
        secondary: '#9c539c',
        'soft-violet': '#a16dc9',
        'forest-green': '#5b8563',
        'skyline-blue': '#00b4d8',
        ink: '#231f20',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
