// Скрытие и появление формы
function openHideForms() {

    let mobNav = document.querySelector(".mobile-nav");
    let btnRequests = document.querySelectorAll(".btn-popup");
    let overblock = document.querySelector(".overblock");

    btnRequests.forEach(btnRequest => {
        btnRequest.addEventListener("click", function() {

            if (this.dataset.request) {
                // нахождение формы по дата атрибуту
                let data = this.dataset.request;
                let form = document.querySelector(`${data}`);

                // добавление затемненного фона
                overblock.classList.add("overblock_act");

                // инициализация первой и второй частей сложной формы и кнопки их переключения
                let btnSlide = form.querySelector(".popup__btn-slide");
                let bodyPrev, bodyNext;
                if (btnSlide) {
                    bodyPrev = form.querySelector('.popup__body-prev');
                    bodyNext = form.querySelector('.popup__body-next');
                }

                // инициализация номера для прогрессбара
                let circleNum = document.querySelector(".progress-ring-wrapper__num");

                if (form) {
                    // открытие формы
                    form.classList.toggle("popup_act");

                    // скрытие формы, мобильной навигации и затемненного фона по клику на крестик
                    let btnClose = form.querySelector(".popup__btn-close");
                    btnClose.addEventListener("click", function() {
                        if (!mobNav.classList.contains("mobile-nav_act")) {
                            overblock.classList.remove("overblock_act");
                        }

                        form.classList.remove("popup_act");

                        if (btnSlide) {
                            circleNum.textContent = "01";

                            // при закрытии всегда сложная форма будет открыта с первой части
                            setTimeout(function() {
                                nextStep();
                                bodyPrev.classList.add('open');
                            },500) 
                        } 
                    })

                    // скрытие формы, мобильной навигации и затемненного фона по клику на затемненный фон
                    overblock.addEventListener("click", function() {

                        form.classList.remove("popup_act");

                        if (btnSlide) {
                            circleNum.textContent = "01";
                            
                            // при закрытии всегда сложная форма будет открыта с первой части
                            setTimeout(function() {
                                nextStep()
                                bodyPrev.classList.add('open')
                            },500) 
                        } 
                    })

                    // инициализация прогрессбара
                    let circle = document.querySelector(".progress-ring__circle");
                    let radius = circle.r.baseVal.value;
                    let circumference = 2 * Math.PI * radius;
                                    
                    circle.style.strokeDasharray = `${circumference} ${circumference}`;
                    circle.style.strokeDashoffset = circumference;
                                
                    // вычисление процента для прогрессбара
                    function setProgress(percent) {
                        const offset = circumference - percent / 100 * circumference;
                        circle.style.strokeDashoffset = offset;
                    }

                    let percent = 50;
                    setProgress(percent);

                    // скрытие и появление частей сложной формы по клику в зависимости от условия и изменение состояния прогрессбара
                    if (btnSlide) {
                        btnSlide.addEventListener("click", function() {
    
                            if (bodyPrev.classList.contains('open')) {
                                prevStep()

                                circleNum.textContent = "02";

                                setTimeout(function() {
                                    bodyPrev.classList.remove("open");
                                    percent = 100;
                                    setProgress(percent);
                                },0)
                            } else {
                                nextStep()

                                circleNum.textContent = "01";

                                setTimeout(function() {
                                    bodyPrev.classList.add("open")
                                    percent = 50;
                                    setProgress(50);
                                },0)
                            }
                        })
                    }
                    function nextStep() {
                        bodyPrev.classList.remove("popup__body-prev_act")
                        bodyNext.classList.remove("popup__body-next_act")
                        btnSlide.classList.remove("popup__btn-slide_act")
                    }
                    function prevStep() {
                        bodyPrev.classList.add("popup__body-prev_act")
                        bodyNext.classList.add("popup__body-next_act")
                        btnSlide.classList.add("popup__btn-slide_act")
                    }
                }
            }
        })
    })
}
openHideForms()