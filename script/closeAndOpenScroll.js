// Работа со скроллом при скрытии и появлении формы
function scroll() {
    let btnRequests = document.querySelectorAll(".btn-manage-scroll");
    let body = document.querySelector("body");
    let lockPadding = document.querySelectorAll(".lock-padding");
    let overblock = document.querySelector(".overblock");
    let mobNav = document.querySelector(".mobile-nav");
    let popups = document.querySelectorAll(".popup");

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

                let arrPopup = [];
                popups.forEach(popup => {
                    if (popup.classList.contains("popup_act")) arrPopup.push(popup)
                })
                if (mobNav.classList.contains("mobile-nav_act") && arrPopup.length > 0) {
                    return;
                }
                bodyunLock();
            })
        })
    }
    overblock.addEventListener("click", function() {
        let arrPopup = [];
                popups.forEach(popup => {
                    if (popup.classList.contains("popup_act")) arrPopup.push(popup)
                })
                if (mobNav.classList.contains("mobile-nav_act") && arrPopup.length > 0) {
                    console.log(arrPopup)
                    return;
                }
                mobNav.classList.remove("mobile-nav_act")
                overblock.classList.remove("overblock_act")
                bodyunLock();
    })
    function bodyLock(){
        const lockPaddingValue = window.innerWidth - document.querySelector('body').offsetWidth + 'px';
        
        if (lockPadding.length > 0) {
            lockPadding.forEach(el => {
                el.style.paddingRight = lockPaddingValue;
            })
        }

        body.style.paddingRight = lockPaddingValue;
        body.classList.add("lock");
    }
    function bodyunLock() {
        setTimeout(function() {
            if (lockPadding.length > 0) {
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