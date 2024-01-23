let section = document.querySelector(".service-grid");
let sectionItems = document.querySelectorAll(".service-grid__path");
let lines = document.querySelectorAll(".service-grid__subline");
let circles = document.querySelectorAll(".service-grid__circle");

// Массив с координатами начала всех линий относительно верха документа
let topPos = section.offsetTop
let arrPoses = []
sectionItems.forEach(sectionItem => {
    let sectionItemPos = sectionItem.offsetTop - topPos
    arrPoses.push(sectionItemPos)
})
console.log(arrPoses)

// Массив с линиями
let arrLines = []
lines.forEach(line => {
    arrLines.push(line)
})

// Массив с кружками
let arrCircles = []
circles.forEach(circle => {
    arrCircles.push(circle)
})

window.addEventListener("scroll", function() {

    // Отнимаем 350 пикселей чтобы росла шла заранее
    let topPosOnScroll = section.getBoundingClientRect().top - 350
    let topPosOnScrollTemp = -topPosOnScroll;
    console.log(topPosOnScrollTemp)

    if(topPosOnScroll <= 0) {
            
        for (let i = 0;i < lines.length;i++) {
            console.log(topPosOnScrollTemp)

            // добавление высоты со скроллом
            if (topPosOnScrollTemp >= arrPoses[i]) {
                arrLines[i].style.height = `${topPosOnScrollTemp - arrPoses[i]}px`;
                arrCircles[i].classList.add("service-grid__circle_act")
            }
            // удаление высоты при уменьшении скролла в местах начала линий
            if (topPosOnScrollTemp <= arrPoses[i]) {
                arrLines[i].style.height = `0`
                arrCircles[i].classList.remove("service-grid__circle_act")
            }
            // // удаление высоты при уменьшении скролла самом начале
            if (topPosOnScrollTemp >= 0 && topPosOnScrollTemp <= 20) {
                arrLines[i].style.height = `0`
                arrCircles[i].classList.remove("service-grid__circle_act")
            }
        }
    }
})