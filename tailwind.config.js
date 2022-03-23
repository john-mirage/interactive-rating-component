const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ratings: "360px",
      sm: "576px",
    },
    colors: {
      "orange": "hsl(25, 97%, 53%)",
      "white": "hsl(0, 0%, 100%)",
      "light-grey": "hsl(217, 12%, 63%)",
      "medium-grey": "hsl(216, 12%, 54%)",
      "dark-blue": "hsl(213, 19%, 18%)",
      "button": "#262F38",
      "background-from": "#171E28",
      "background-to": "#1E252F",
      "very-dark-blue": "hsl(216, 12%, 8%)",
      "transparent": "transparent",
    },
    extend: {
      spacing: {
        "star": "18px",
        "ratings": "calc(100% + 1rem)",
      },
      borderRadius: {
        "4xl": "1.5rem",
      },
      letterSpacing: {
        "button": "2px",
      },
      maxWidth: {
        "card": "412px",
      },
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
