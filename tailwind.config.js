const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#BE8D3C',
        'grey':    '#C7C7C7',
        'grey-light':   '#707070',
        'grey-light-2' : '#F2F2F2',
        'grey-custom' : '#8D8D8D'
      },
      fontFamily: {
        en: ['Neue-regular', ...defaultTheme.fontFamily.sans],
        bg: ['Neue-regular-cyrillic', ...defaultTheme.fontFamily.sans]
        // bold: ['Neue-bold', ...defaultTheme.fontFamily.sans],
        // boldCyrillic: ['Neue-bold-cyrillic', ...defaultTheme.fontFamily.sans],      
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
        'title': '1.125rem', // 18px
        '2xl': '1.25rem', // 20px
        '3xl': '1.563rem', // 25px
        '4xl': '1.75rem', // 28px
        'mobile': '1.875rem', // 30px
        '5xl': '2.25rem', // 36px
        '6xl': '2.5rem', // 40px
        '7xl': '3rem', // 48px
        '8xl': '3.5rem', // 56px
      },
      lineHeight: {
        '3.3': '0.813rem', // 13px
        '3.4': '0.938rem', // 15px
        '4.5': '1.063rem', // 17px
        '4.6': '1.125rem', // 18px
        '4.7': '1.188rem', // 19px
        '5.2': '1.375rem', // 22px
        '5.5': '1.563rem', // 25px
        '7.5': '1.875rem', // 30px
        '7.9': '2.25rem',   // 36px
        '8': '2.313rem',   // 37px
        '12': '3rem',      // 48px
        '14': '3.5rem',    // 56px 
        '15': '3.813rem'   // 61px 
      },
      width: {
        '3.8': '0.938rem',  // 15px
        '4.5': '1.125rem',  // 18px
        '5.5': '1.563rem',  // 25px
        '13.5': '3.125rem', // 50px
        '18': '4.625rem',   // 74px
        '18.1': '4.688rem', // 75px
        '23': '5.625rem',   // 90px
        '25.5': '6.25rem',  // 100px
        '26': '6.625rem',   // 106px
        '30': '7.5rem',     // 120px
        '34': '8.5rem',     // 136px
        '34.5': '8.75rem',  // 140px
        '34.7': '9.125rem',  // 146px
        '34.8': '9.313rem',  // 149px
        '42': '10.25rem',   // 164px
        '45': '11.25rem',   // 180px
        '47': '11.875rem',  // 190px
        '47.6': '12.375rem',// 198px
        '66.8': '13.313rem',// 213px
        '67.2': '15.563rem',// 249px
        '67.5': '16.563rem',// 265px
        '68': '16.875rem',  // 270px
        '71': '17.75rem',   // 284px
        '78': '18.75rem',   // 300px
        '84': '20.875rem',  // 334px
        '87': '21.375rem',  // 342px
        '87.5': '21.5rem',  // 344px
        '94': '22.813rem',  // 365px
        '95': '23.438rem',  // 375px
        '133': '25.313rem', // 405px
        '146': '28.75rem',  // 460px
        '147': '31.25rem',  // 500px
        '148': '32.25rem',  // 516px
        '149': '32.813rem', // 525px
        '149.9': '21.938rem',// 551px
        '150': '34.688rem', // 555px
        '152': '35.625rem', // 570px
        '155': '37rem',     // 592px
        '172': '40.625rem', // 650px
        '173': '41.5rem',   // 664px
        '188': '46.563rem', // 745px
        '196': '50.625rem', // 810px
        '198': '52.5rem',   // 840px,
        '205': '60rem',   // 960px
        '211': '62.375rem'   // 998px
      },
      height: {
        '10.1': '2.625rem',  // 42px
        '13.5': '3.125rem',  // 50px
        '13.8': '3.438rem',  // 55px
        '13.9': '3.563rem',  // 57px
        '28.6': '6.438rem',  // 103px
        '28.7': '6.813rem',  // 109px
        '29': '7.063rem',    // 113px
        '29.3': '7.25rem',   // 116px
        '31': '7.688rem',    // 123px
        '42': '10.438rem',   // 167px
        '44.8': '11.438rem', // 183px
        '47': '11.875rem',   // 190px
        '48.2': '12.125rem', // 194px
        '55': '13.75rem',    // 220px 
        '58': '14.5rem',     // 232px
        '62': '15.313rem',   // 245px
        '63.5': '15.875rem', // 254px  
        '67': '16.25rem',    // 260px
        '67.5': '16.75rem',    // 268px
        '77.5': '18.125rem', // 290px 
        '78': '18.375rem',   // 294px  
        '94': '23.438rem',   // 375px 
        '97': '24.75rem',    // 396px   
        '141': '27.813rem',  // 445px
        '170': '31.25rem',   // 500px 
        '178': '37.188rem',  // 595px   
        '188': '43.438rem',  // 695px
        '190': '44.313rem',  // 709px
        '193': '47.563rem',  // 761px
        '198': '52.5rem'     // 840px
      },
      margin: {
        '2.5': '0.625rem', // 10px
        '4.5': '1.125rem', // 18px
        '5.2': '1.375rem', // 22px
        '5.5': '1.563rem', // 25px
        '7.1': '1.875rem', // 30px
        '9.5': '2.4rem',   // 38px
        '13': '3.125rem',  // 50px
        '13.5': '3.375rem',// 54px
        '15.5': '3.75rem', // 60px
        '18': '4.375rem',  // 70px
        '18.5': '4.813rem',// 77px
        '21': '5.188rem',  // 83px
        '23': '5.625rem',  // 90px
        '26.6': '6.25rem', // 100px
        '27': '6.75rem',   // 108px
        '30': '7.5rem',    // 120px
        '38': '9.688rem',  // 155px
        '41': '10.375rem'   // 166px
      },
      padding: {
        '1.2': '0.375rem',  // 6px
        '4.2': '1.063rem',  // 17px
        '7.1': '1.875rem',  // 30px
        '13': '3.125rem',  // 50px
        '15': '3.75rem',   //60px
        '18.5': '4.813rem',// 77px
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '10': '10px',
        '20': '20px',
      },
      spacing: {
        '0.8': '.188rem',   // 3px
        '3.8': '.938rem',   // 15px
        '7.5': '1.875rem',  // 30px
        '7.9': '2.188rem',  // 35px
        '10.5': '2.625rem', // 42px
        '12.8': '3.125rem',  // 50px
        '13': '3.25rem',    // 52px
        '15.3': '3.625rem', // 58px
        '15.5': '3.75rem',  // 60px
        '15.6': '3.938rem',  // 63px
        '23': '5.313rem',   // 85px
        '27.5': '6.875',    // 110px
        '36': '9.375rem'    // 150px
      },
      flex: {
        '2': '1 1 50%'
      },
      backgroundImage: {
        'splash': "url('/src/assets/images/backgrounds/splash-bg.jpg')",
        'header': "url('/src/assets/images/backgrounds/header-bg.jpg')",
        'footer': "url('/src/assets/images/backgrounds/footer-bg.jpg')",
        'calendar': "url('/src/assets/images/backgrounds/calendar-bg.png')",
        'vote': "url('/src/assets/images/backgrounds/vote.svg')",
        'jury': "url('/src/assets/images/backgrounds/jury.jpg')",
        'jury-m': "url('/src/assets/images/backgrounds/jury-m.jpg')",
        'participants': "url('/src/assets/images/backgrounds/participants.jpg')",
        'participants-m': "url('/src/assets/images/backgrounds/participants-m.jpg')"


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