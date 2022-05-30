(function () {
    "use strict";
      
    var swiperHome = new Swiper('.home-slider', {
        // Optional parameters
        autoHeight: false,
        loop: true,
        speed: 500,
        // Navigation arrows
        navigation: {
          nextEl: '.home-slider-next',
          prevEl: '.home-slider-prev',
        },
      });
  
  })();