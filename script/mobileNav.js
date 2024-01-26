let mobNav = document.querySelector(".mobile-nav");
let burger = document.querySelector(".nav__burger");
let btnClose = document.querySelector(".mobile-nav__close");
let overblock = document.querySelector(".overblock")

burger.addEventListener("click", function() {
    mobNav.classList.add("mobile-nav_act");
    overblock.classList.add("overblock_act");
})
btnClose.addEventListener("click", function() {
    mobNav.classList.remove("mobile-nav_act");
    overblock.classList.remove("overblock_act");
})



