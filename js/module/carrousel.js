export default function carrousel() {
   new Swiper(".swiper", {
    spaceBetween: 10,
    fade: "true",
    centerSlide: "true",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: true,

    breakpoints: {
      700: {
        slidesPerView: 1,
      },
      960: {
        slidesPerView: 2,
      },
      1050: {
        slidesPerView: 2.3,
      },
      1230: {
        slidesPerView: 3,
      }
    },
  });
}