const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#BE8D3C',
        'grey':    '#C7C7C7',
        'grey-light':   '#707070'
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
        '4xl': '1.75rem', // 28px
        '5xl': '2.25rem', // 36px
        '6xl': '2.5rem', // 40px
        '8xl': '3.5rem', // 56px
      },
      lineHeight: {
        '4.5': '1.063rem', // 17px
        '5.2': '1.375rem', // 22px
        '7.5': '1.875rem', // 30px
        '8': '2.313rem',   // 37px
        '14': '3.5rem',    // 56px 
        '15': '3.813rem'   // 61px 
      },
      width: {
        '3.8': '0.938rem',  // 15px
        '4.5': '1.125rem',  // 18px
        '5.5': '1.563rem', // 25px
        '13.5': '3.125rem',  // 50px
        '18': '4.625rem',   // 74px
        '23': '5.625rem',   // 90px
        '25.5': '6.25rem',  // 100px
        '26': '6.625rem',   // 106px
        '30': '7.5rem',      // 120px
        '34': '8.5rem',     // 136px
        '34.5': '8.75rem',  // 140px
        '42': '10.25rem',   // 164px
        '47': '11.875rem',  // 190px
        '47.6': '12.375rem',// 198px
        '68': '16.875rem',  // 270px
        '71': '17.75rem',   // 284px
        '78': '18.75rem',   // 300px
        '84': '20.875rem',   // 334px
        '87': '21.375rem',   // 342px
        '94': '22.813rem',  // 365px
        '133': '25.313rem', // 405px
        '146': '28.75rem',  // 460px
        '150': '34.688rem', // 555px
        '155': '37rem',     // 592px
        '173': '41.5rem', // 664px
        '188': '46.563rem', // 745px
      },
      height: {
        '13.5': '3.125rem',  // 50px
        '29': '7.063rem',  // 113px
        '31': '7.688rem',  // 123px
        '42': '10.438rem',// 167px
        '44.8': '11.438rem',// 183px
        '47': '11.875rem',// 190px
        '55': '13.75rem',    // 220px 
        '58': '14.5rem',    // 232px 
        '78': '18.375rem', // 294px  
        '94': '23.438rem',// 375px      
        '188': '43.438rem',// 695px
      },
      margin: {
        '5.2': '1.375rem', // 22px
        '5.5': '1.563rem', // 25px
        '7.1': '1.875rem', // 30px
        '9.5': '2.4rem',   // 38px
        '13': '3.125rem',  // 50px
        '13.5': '3.375rem',// 54px
        '18': '4.375rem',  // 70px
        '18.5': '4.813rem',  // 77px
        '27': '6.75rem',   // 108px
        '30': '7.5rem',    // 120px
        '38': '9.688rem',  // 155px
        '41': '10.375rem'   // 166px
      },
      padding: {
        '13': '3.125rem',  // 50px
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '10': '10px',
        '20': '20px',
      },
      spacing: {
        '0.8': '.188rem', // 3px
        '3.8': '.938rem', // 15px
        '10.5': '2.625rem', // 42px
        '13': '3.25rem', // 52px
        '23': '5.313rem', // 85px
        '36': '9.375rem'  // 150px
      },
      backgroundImage: {
        'splash': "url('/src/assets/images/backgrounds/splash-bg.jpg')",
        'header': "url('/src/assets/images/backgrounds/header-bg.jpg')",
        'footer': "url('/src/assets/images/backgrounds/footer-bg.jpg')",
        'calendar': "url('/src/assets/images/backgrounds/calendar-bg.png')"
      }
    },
    container: {
      center: true,
      padding: "0rem",
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1124px',
        'xl': '1124px',
        '2xl': '1124px'
        // ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}