// Инициализация необходимых элементов
let sectionPlan = document.querySelector(".plan-grid");
let icons = document.querySelectorAll(".plan-grid__line");

// Нахождение расстояния от контента с иконками до начала документа
let topPosition = sectionPlan.offsetTop;

// Инициализация и заполнение массива с иконками
let arrIcons = [];
icons.forEach(icon => {
    arrIcons.push(icon);
})
// Перестановка иконок местами
function changePlace() {
    let temp =  arrIcons[3];
    arrIcons[3] = arrIcons[4];
    arrIcons[4] = temp;
}
if (window.getComputedStyle(document.querySelector(".hollow-div-lg")).display == 'block') {
    changePlace()
}
console.log(arrIcons)

// Нахождение высоты контента с иконками и выполнение арифметических действий
let sectionPlanHeight = parseInt(window.getComputedStyle(sectionPlan).height);
let sectionPlanHeightMultiply = sectionPlanHeight * 1.5;
sectionPlanHeightMultiply = sectionPlanHeightMultiply / arrIcons.length;

// Создание и инициализация точек, основанных на измененной высоте контента с иконками
let arrPoints = [];
for (let i = 0;i <= arrIcons.length;i++) {
    arrPoints.push(+sectionPlanHeightMultiply * i)
}
console.log(arrPoints)

window.addEventListener("scroll", function() {

    let topPositionOnScroll = sectionPlan.getBoundingClientRect().top - 400;
    let topPositionOnScrollTemp = -topPositionOnScroll;

    if(topPositionOnScroll <= 0) {
        console.log(topPositionOnScrollTemp)
        
        for (let i = 0;i <= arrIcons.length - 1;i++) {
            
            if (topPositionOnScrollTemp >= arrPoints[i]) {
                arrIcons[i].classList.add("plan-grid__line_act")
            }
            if (topPositionOnScrollTemp <= arrPoints[i]) {
                arrIcons[i].classList.remove("plan-grid__line_act")
            }
            if (topPositionOnScrollTemp <= 20) {
                arrIcons[i].classList.remove("plan-grid__line_act")
            }
        }
    }
})