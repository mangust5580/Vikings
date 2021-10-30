const heroesSwiper = document.querySelector(".heroes__swiper");

let swiperSlider = new Swiper(heroesSwiper, {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  fadeEffect: {
    crossFade: true,
  },
  effect: "fade",
  navigation: {
    nextEl: ".heroes__swiper-btn--next",
    prevEl: ".heroes__swiper-btn--prev",
  },
});
