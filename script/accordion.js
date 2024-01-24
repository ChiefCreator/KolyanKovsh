let accordions = document.querySelectorAll(".accordion");
accordions.forEach(accordion => {
    let accordionItems = Array.from(accordion.querySelectorAll(".accordion__item"));

    accordionItems.forEach(accordionItem => {
        
        let accordionHead = accordionItem.firstElementChild;
        accordionHead.addEventListener("click", function() {

            let accordionBody = this.nextElementSibling;

            if (!accordionBody.classList.contains("accordion__body_act")) {
                let accordionBodyAll = accordion.querySelectorAll('.accordion__body')
                accordionBodyAll.forEach(accordionBody => {
                    accordionBody.classList.remove("accordion__body_act");
                })
                let accordionHeadAll = accordion.querySelectorAll('.accordion__head')
                accordionHeadAll.forEach(accordionHead => {
                    accordionHead.classList.remove("accordion__head_act");
                })
            }
            accordionBody.classList.toggle("accordion__body_act");
            accordionHead.classList.toggle("accordion__head_act");
        })
    })
})