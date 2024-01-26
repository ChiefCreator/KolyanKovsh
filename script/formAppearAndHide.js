// Скрытие и появление формы
function openHideForms() {

    let mobNav = document.querySelector(".mobile-nav");
    let btnRequests = document.querySelectorAll(".btn-popup");
    let overblock = document.querySelector(".overblock");

    btnRequests.forEach(btnRequest => {
        btnRequest.addEventListener("click", function() {

            if (this.dataset.request) {
                let data = this.dataset.request;

                let form = document.querySelector(`${data}`);
                overblock.classList.add("overblock_act");

                if (form) {
                    form.classList.toggle("popup_act");

                    let btnClose = form.querySelector(".popup__btn-close");
                    btnClose.addEventListener("click", function() {
                        if (!mobNav.classList.contains("mobile-nav_act")) {
                            overblock.classList.remove("overblock_act");
                        }
                        form.classList.remove("popup_act");
                    })

                    overblock.addEventListener("click", function() {
                        if (!mobNav.classList.contains("mobile-nav_act")) {
                            overblock.classList.remove("overblock_act");
                        }
                        if (!form.classList.contains("popup_act")) {
                            mobNav.classList.remove("mobile-nav_act")
                            overblock.classList.remove("overblock_act");
                        }
                        form.classList.remove("popup_act");
                    })

                    let btnSlide = form.querySelector(".popup__btn-slide");
                    let bodyPrev;
                    let bodyNext;

                    if (btnSlide) {
                        btnSlide.addEventListener("click", function() {
                            bodyPrev = form.querySelector('.popup__body-prev');
                            bodyNext = form.querySelector('.popup__body-next');
    
                            if (bodyPrev.classList.contains('open')) {
                                prevStep()
                                setTimeout(function() {
                                    bodyPrev.classList.remove("open")
                                },0)
                            } else {
                                nextStep()
                                setTimeout(function() {
                                    bodyPrev.classList.add("open")
                                },0)
                            }
                        })
                    }
                    function nextStep() {
                        bodyPrev.classList.remove("popup__body-prev_act")
                        bodyNext.classList.remove("popup__body-next_act")
                        btnSlide.textContent = "Следующий шаг"
                    }
                    function prevStep() {
                        bodyPrev.classList.add("popup__body-prev_act")
                        bodyNext.classList.add("popup__body-next_act")
                        btnSlide.textContent = "Предыдущий шаг"
                    }
                }
            }
        })
    })
}
openHideForms()