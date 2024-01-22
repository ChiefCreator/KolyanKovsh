const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    loop:true,
    slidesPerView: 2,
    spaceBetween: 25,
    navigation: {
      nextEl: '.btn-swiper-next',
      prevEl: '.btn-swiper-prev',
    },
});

let next = document.querySelector(".btn-swiper-next");
let prev = document.querySelector(".btn-swiper-prev");
let slides = document.querySelectorAll(".swiper-slide");
let header = document.querySelector(".header");

next.addEventListener("click", function() {

    slides.forEach(slide => {
        if (slide.classList.contains("swiper-slide-active")) {
            
            let slideContent = slide.firstElementChild;
            let imgPath = window.getComputedStyle(slideContent).backgroundImage;

            header.style.backgroundImage = imgPath;
        }
    })
})

prev.addEventListener("click", function() {

    slides.forEach(slide => {
        if (slide.classList.contains("swiper-slide-next")) {
            
            let slideContent = slide.firstElementChild;
            let imgPath = window.getComputedStyle(slideContent).backgroundImage;

            header.style.backgroundImage = imgPath;
        }
    })
})