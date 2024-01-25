// Работа со скроллом при скрытии и появлении формы
function scroll() {
    let btnRequests = document.querySelectorAll(".btn-popup");
    let body = document.querySelector("body");
    let lockPadding = document.querySelectorAll(".lock-padding");
    let overblock = document.querySelector(".overblock");

    let timeout = 500;

    if (btnRequests.length > 0) {
        btnRequests.forEach(btnRequest => {
            btnRequest.addEventListener('click', function() {
                bodyLock();
            })
        })
    }
    let formClosebtns = document.querySelectorAll(".popup__btn-close");
    if (formClosebtns.length > 0) {
        formClosebtns.forEach(formClosebtn => {
            formClosebtn.addEventListener("click", function() {
                bodyunLock();
            })
        })
    }
    overblock.addEventListener("click", function() {
        bodyunLock();
    })
    function bodyLock(){
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
        
        if (lockPadding > 0) {
            lockPadding.forEach(el => {
                el.style.paddingRight = lockPaddingValue;
            })
        }

        body.style.paddingRight = lockPaddingValue;
        body.classList.add("lock");
    }
    function bodyunLock() {
        setTimeout(function() {
            if (lockPadding > 0) {
                lockPadding.forEach(el => {
                    el.style.paddingRight = 0;
                })
            }

            body.style.paddingRight = 0;
            body.classList.remove("lock");
        },timeout);
    }
}
scroll()