var swiper = new Swiper(".mySwiper", {
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: false,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: false,
      translate: ["120%", 0, -500],
    },
  },
  slidesPerView: `auto`,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
});
