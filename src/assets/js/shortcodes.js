(function () {
    "use strict";
  
    var showMoreBtn = document.querySelector(".show-more");
    var showMoreBtnIcon = document.querySelector(".show-more .show-more__icon");
    var showLessText = document.querySelector(".show-more .show-more__text-less");
    var showLessMore = document.querySelector(".show-more .show-more__text-more");
    var collapseTxt = document.querySelector(".collapse-text");
    var shareBtn = document.querySelector(".share-btn-normal");
    var shareBtnActive = document.querySelector(".share-btn-active");
    var shareBtnActiveClose = document.querySelector(".share-btn-active .close-icon");

    if (showMoreBtn) {
      showMoreBtn.addEventListener('click', function() {
        showMoreBtnIcon.classList.toggle("rotate-180");
        showLessText.classList.toggle("hidden");
        showLessMore.classList.toggle("hidden");
        collapseTxt.classList.toggle("h-58");
      })
    }

    if (shareBtn) {
      shareBtn.addEventListener('click', function click() {
        shareBtn.classList.toggle("hidden");
        shareBtnActive.classList.toggle("hidden");
      })
  
      shareBtnActiveClose.addEventListener('click', function() {
        shareBtnActive.classList.toggle("hidden");
        shareBtn.classList.toggle("hidden");
      })
    }
  
  })();