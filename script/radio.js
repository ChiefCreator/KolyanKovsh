let radioSections = document.querySelectorAll(".popup__radio-content");

radioSections.forEach(function(radioSection) {
    let radioWrappers = Array.from(radioSection.children);

    radioWrappers.forEach(function(radioWrapper) {
        let radios = radioWrapper.querySelectorAll(".popup__radio-div");

        radios.forEach(radio => {
            radio.addEventListener("click", function() {

                if (radioSection.querySelectorAll(".popup__radio-div_act").length == 1) {
                    radioSection.querySelectorAll(".popup__radio-div").forEach(radio => {
                        radio.classList.remove("popup__radio-div_act");
                    })
                }

                this.classList.add("popup__radio-div_act");
            })
        })
    })
})