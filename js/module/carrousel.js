export default function carrousel() {
   new Swiper(".swiper", {
    loop: true,
    fade: "true",
    centerSlide: "true",
    spaceBetween: 10,
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
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