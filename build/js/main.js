"use strict";

var heroesSwiper = document.querySelector(".heroes__swiper");
var swiperSlider = new Swiper(heroesSwiper, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  fadeEffect: {
    crossFade: true
  },
  effect: "fade",
  navigation: {
    nextEl: ".heroes__swiper-btn--next",
    prevEl: ".heroes__swiper-btn--prev"
  }
});
"use strict";

new ModalVideo(".js-modal-btn");
"use strict";
//# sourceMappingURL=main.js.map
