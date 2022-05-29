(function () {
    "use strict";
  
    var showMoreBtn = document.querySelector(".show-more");
    var showMoreBtnIcon = document.querySelector(".show-more .show-more__icon");
    var showLessText = document.querySelector(".show-more .show-more__text-less");
    var showLessMore = document.querySelector(".show-more .show-more__text-more");
    var collapseTxt = document.querySelector(".collapse-text");

    
    var swiper = new Swiper('.home-slider', {
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



    showMoreBtn.addEventListener('click', function(){
        showMoreBtn.classList.toggle("mystyle");
        showMoreBtnIcon.classList.toggle("rotate-180");
        showLessText.classList.toggle("hidden");
        showLessMore.classList.toggle("hidden");
        collapseTxt.classList.toggle("h-58");
    })




  
  })();