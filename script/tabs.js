let tabBtns = document.querySelectorAll(".technique-choice__item");
let tabs = document.querySelectorAll(".technique-tabs__content");

function workLocalStorage() {
    let infoBtns = document.querySelectorAll(".car-list__info");
    infoBtns.forEach(infoBtn => {
        infoBtn.addEventListener("click", function() {

            localStorage.setItem("btn",infoBtn.dataset.tab);
        })
    })

    let dataFromStorage;
    if (localStorage.getItem("btn")) {
        dataFromStorage = localStorage.getItem("btn");
    }

    let tabFromStorage = document.querySelector(dataFromStorage);
    if (tabFromStorage) {
        tabFromStorage.classList.add("technique-tabs__content_act");
        tabFromStorage.querySelector(".technique-tabs__auto-height").classList.add("technique-tabs__auto-height_act");

        let tabBtnFromStorage = document.querySelector(`[data-tab="${dataFromStorage}"]`)
        tabBtnFromStorage.classList.add("technique-choice__item_act");
    }
}
workLocalStorage()

tabBtns.forEach(tabBtn => {

    tabBtn.addEventListener("click", function() {

        // Сброс активных классов при клике
        tabBtns.forEach(tabBtn => {
            tabBtn.classList.remove("technique-choice__item_act");
        })
        tabs.forEach(tab => {
            tab.classList.remove("technique-tabs__content_act");
        })

        let data = tabBtn.dataset.tab;

        let tab = document.querySelector(data);
        if (!tab) return;
        let tabAuto = tab.querySelector(".technique-tabs__auto-height")
        console.log(tabAuto)
        tabAuto.classList.add("technique-tabs__auto-height_act")
        tab.classList.add("technique-tabs__content_act");

        tabBtn.classList.add("technique-choice__item_act")
    })
})