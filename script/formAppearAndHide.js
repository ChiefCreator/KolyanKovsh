let btnRequests = document.querySelectorAll(".btn-request");

btnRequests.forEach(btnRequest => {
    btnRequest.addEventListener("click", function() {

        if (this.dataset.request) {
            let data = this.dataset.request
            console.log(data)
            
            let form = document.querySelector(`${data}`)

            if (form) {
                form.classList.toggle("popup_act")

                let btnClose = form.querySelector(".popup__btn-close");
                btnClose.addEventListener("click", function() {
                    form.classList.remove("popup_act");
                })

                let btnSlide = form.querySelector(".popup__btn-slide");
                let bodyPrev;
                let bodyNext;
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