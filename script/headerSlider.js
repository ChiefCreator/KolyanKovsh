let next = document.querySelector(".btn-swiper-next");
let prev = document.querySelector(".btn-swiper-prev");
let slides = document.querySelectorAll(".swiper-slide");
let header = document.querySelector(".header");

const swiper = new Swiper('.swiper', {
    speed: 1000,
    spaceBetween: 100,
    loop:true,
    slidesPerView: 2,
    spaceBetween: 25,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.btn-swiper-next',
      prevEl: '.btn-swiper-prev',
    },
    on: {
        slideNextTransitionStart: function (swiper) {
            slides.forEach(slide => {
                if (slide.classList.contains("swiper-slide-prev")) {
                    
                    let slideContent = slide.firstElementChild;
                    let imgPath = window.getComputedStyle(slideContent).backgroundImage;
        
                    header.style.backgroundImage = imgPath;
                }
            })
        },
        slidePrevTransitionStart: function (swiper) {
            slides.forEach(slide => {
                if (!slide.classList.contains("swiper-slide-active") && !slide.classList.contains("swiper-slide-next")) {
                    
                    let slideContent = slide.firstElementChild;
                    let imgPath = window.getComputedStyle(slideContent).backgroundImage;
        
                    header.style.backgroundImage = imgPath;
                }
            })
        },
    }
});