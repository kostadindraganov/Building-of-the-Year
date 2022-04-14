const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#BE8D3C",
      },
      fontFamily: {
        bold: ['Neue-bold', ...defaultTheme.fontFamily.sans],
        regular: ['Neue-regular', ...defaultTheme.fontFamily.sans],
        boldCyrillic: ['Neue-bold-cyrillic', ...defaultTheme.fontFamily.sans],
        regularCyrillic: ['Neue-regular-cyrillic', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'xs': '.75rem',  // 12px
        'sm': '.938rem', // 15px
        'lg': '1.25rem', // 20px
        'xl': '2.5rem',  // 40px
        '2xl': '3.5rem', // 56px
      },
      width: {
        "270px": "270px",
      },
      backgroundImage: {
        'splash-bg': "url('/src/assets/images/splash/splash-bg.jpg')",
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
}