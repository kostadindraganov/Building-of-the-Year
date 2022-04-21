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
        'extra-small': '.563rem', // 9px
        'uxs': '.625rem', // 10px
        'xs': '.688rem', // 11px
        'sm': '.75rem',  // 12px
        'lg': '.813rem', // 13px
        'base': '.875rem', // 14px
        'xl': '.938rem',  // 15px
        '1xl': '.938rem',  // 16px
        '2xl': '1.25rem', // 20px
        '3xl': '1.563rem', // 25px
        '4xl': '2.25rem', // 36px
        '5xl': '2.5rem', // 40px
        '7xl': '3.5rem', // 56px
      },
      lineHeight: {
        '4.5': '1.063rem', // 17px
        '5.5': '1.375rem', // 56px
        '7.5': '1.875rem', // 30px
        '8': '2.313rem', // 37px
        '14': '3.5rem',     // 56px 
        '15': '3.813rem'     // 61px 
      },
      width: {
        '3.8': '0.938rem',  // 15px
        '4.5': '1.125rem',  // 18px
        '23': '5.625rem',   // 90px
        '25.5': '6.25rem',  // 100px
        '26': '6.625rem',   // 106px
        '34': '8.5rem',     // 136px
        '42': '10.25rem',   // 164px
        '47': '11.875rem',  // 190px
        '47.6': '12.375rem',// 198px
        '68': '16.875rem',  // 270px
        '71': '17.75rem',   // 284px
        '78': '18.75rem',   // 300px
        '94': '22.813rem',  // 365px
        '133': '25.313rem', // 405px
        '146': '28.75rem',  // 460px
        '150': '34.688rem', // 555px
        '155': '37rem',     // 592px
      },
      height: {
        '29': '7.25rem',  // 116px
        '31': '7.688rem',  // 123px
        '44.8': '11.438rem',// 183px
        '47': '11.875rem',// 190px
      },
      margin: {
        '5.2': '1.375rem', // 22px
        '7.1': '1.875rem', // 30px
        '9.5': '2.4rem',   // 38px
        '13': '3.125rem',  // 50px
        '18': '4.375rem',  // 70px
        '27': '6.75rem',   // 108px
        '30': '7.5rem',    // 120px
        '38': '9.688rem'   // 155px
      },
      padding: {
        '13': '3.125rem',  // 50px
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '10': '10px',
      },
      spacing: {
        '3.8': '.938rem', // 15px
        '10.5': '2.625rem', // 42px
        '23': '5.313rem', // 85px
        '36': '9.375rem'  // 150px
      },
      backgroundImage: {
        'splash': "url('/src/assets/images/backgrounds/splash-bg.jpg')",
        'footer': "url('/src/assets/images/backgrounds/footer-bg.jpg')",
        'calendar': "url('/src/assets/images/backgrounds/calendar-bg.png')"
      }
    },
    container: {
      center: true,
      padding: "0rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
        // ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}