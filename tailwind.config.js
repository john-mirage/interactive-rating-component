const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '400px',
    },
    colors: {
      "orange": "hsl(25, 97%, 53%)",
      "white": "hsl(0, 0%, 100%)",
      "medium-grey": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "very-dark-blue": "hsl(216, 12%, 8%)",
      "button": "rgba(255,255,255,0.05)",
    },
    extend: {
      fontFamily: {
        sans: [
          'Overpass',
          ...defaultTheme.fontFamily.sans,
        ]
      },
    },
  },
  plugins: [],
}
