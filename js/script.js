const swiper = new Swiper('.slide', {
  loop: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
  },
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    220: {
      slidesPerView: 2,
    },
    550: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 4,
    }
  }
});
const swiperHeader = new Swiper('.swiper-header', {
  loop: true,
  autoplay: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  
});
$(".mobile_btn").on("click", function () {
  $(".nav_menu").toggleClass("active");
});
