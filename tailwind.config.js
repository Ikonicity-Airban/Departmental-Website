/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.handlebars"],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      san: ["Montserrat", "sans-serif"],
      serif: ['Vollkorn', 'serif'],
      // heading: ['Mon']
    },
    extend: {
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },
      colors: {
        "primary": "#5e06f7",
        "black": "#333",
        "white": "#fff",
        "bg-color": "#817ff8",
        "off-white-bg": "rgb(236, 236, 236)",
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
