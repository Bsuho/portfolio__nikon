
function SwiperBox1__init() {
    const swiper = new Swiper(".swiper-box-1 .swiper", {
      loop: true,
      pagination: {
        el: ".swiper-box-1 .swiper-pagination"
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-box-1 .swiper-button-next",
        prevEl: ".swiper-box-1 .swiper-button-prev"
      },
      on: {
        slideChangeTransitionStart: function () {
          $('.swiper-box-1 [data-aos]').hide();
          $('.swiper-box-1 [data-aos]').removeClass('aos-init').removeClass('aos-animate');
        },
        slideChangeTransitionEnd: function () {
          $('.swiper-box-1 [data-aos]').show();
          AOS.init();
        }
      }
    });
  }
  
  
  function SwiperBox3__init() {
    const swiper = new Swiper('.swiper-box-3 .swiper', {
      slidesPerView:1.3,
      spaceBetween:30,
      loop: true,
      centeredSlides: true,
     
      pagination: {
        el: ".swiper-box-3 .swiper-pagination",
        clickable: true,
      },
    });
  }
  
  SwiperBox3__init();