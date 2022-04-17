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
        'uxs': '.625rem', // 1opx
        'xs': '.688rem', // 11px
        'sm': '.75rem',  // 12px
        'lg': '.813rem', // 13px
        'base': '.875rem', // 14px
        'xl': '.938rem',  // 15px
        '2xl': '1.25rem', // 20px
        '3xl': '2.5rem', // 40px
        '4xl': '3.5rem', // 56px
      },
      width: {
        '3.8': '0.938rem',// 15px
        '4.5': '1.125rem',// 18px
        '23': '5.625rem', // 90px
        '26': '6.625rem', // 106px
        '42': '10.25rem', // 164px
        '71': '17.75rem', // 284px
        '78': '18.75rem', // 300px
        '155': '37rem',   // 592px
      },

      margin: {
        '7.1': '1.875rem', // 30px
        '9.5': '2.4rem', // 38px
        '18': '4.375rem',  // 70px
        '27': '6.75rem'   // 108
      },
      borderWidth: {
        '1': '1px',
        '10': '10px'
      },
      backgroundImage: {
        'splash': "url('/src/assets/images/backgrounds/splash-bg.jpg')",
        'footer': "url('/src/assets/images/backgrounds/footer-bg.jpg')"
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