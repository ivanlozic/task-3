document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".swiper", {
    loop: true,
    speed: 1000,
    direction: "horizontal",
    navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
    },
    breakpoints: {
      375: {
        slidePrevClass: "hidden",
        slidesPerView: 1.05,
        spaceBetween: 8,
      },
      1440: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
    },
  });
});

// document.getElementById("toggleSwiper").addEventListener("click", () => {
//     if (swiperInstance && swiperInstance.destroyed === false) {
//       swiperInstance.destroy();
//       swiperInstance = null;
//       console.log("Swiper Destroyed");
//     } else {
//       initializeSwiper();
//       console.log("Swiper Initialized");
//     }
//   });
