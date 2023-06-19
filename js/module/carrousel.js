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
      500: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 1,
      },
      950: {
        slidesPerView: 2,
      },

      1200: {
        slidesPerView: 3,
      }
    },
  });
}