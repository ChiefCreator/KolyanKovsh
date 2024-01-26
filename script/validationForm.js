function validation() {

    const forms = document.querySelectorAll(".popup");
    forms.forEach(form => {

        form.addEventListener("submit", function(event) {
            let error = 0;
            event.preventDefault();
            
            let inputs = form.querySelectorAll("input");
            inputs.forEach(input => {
                let textValidation = input.nextElementSibling;

                if (input.id == "popup-input-name") {

                    if (input.value == '') {
                        input.parentElement.classList.add("danger");
                        input.parentElement.classList.remove("success");
                        textValidation.textContent = "Неверное имя";

                        error++;
                    } else {
                        input.parentElement.classList.remove("danger")
                        input.parentElement.classList.add("success")
                        textValidation.textContent = "Верное имя"
                    }

                    input.addEventListener("input", function() {
                        if (input.value == '') {
                            input.parentElement.classList.add("danger")
                            input.parentElement.classList.remove("success")
                            textValidation.textContent = "Неверное имя";
                        } else {
                            input.parentElement.classList.remove("danger")
                            input.parentElement.classList.add("success")
                            textValidation.textContent = "Верное имя"
                        }
                    })
                }

                if (input.id == "popup-input-number") {
                    let phone = /^\+375[0-9]{9}$/;
                    if (!phone.test(input.value)) {
                        console.log("Неверно")
                        input.parentElement.classList.add("danger");
                        input.parentElement.classList.remove("success");
                        textValidation.textContent = "Введите беларусский номер";
                        error++;
                    } else {
                        console.log("Верно")
                        input.parentElement.classList.remove("danger")
                        input.parentElement.classList.add("success")
                        textValidation.textContent = "Верный номер"
                    }

                    input.addEventListener("input", function() {
                        if (!phone.test(input.value)) {
                            console.log("Неверно")
                            input.parentElement.classList.add("danger")
                            input.parentElement.classList.remove("success")
                            textValidation.textContent = "Введите беларусский номер";
                        } else {
                            console.log("Верно")
                            input.parentElement.classList.remove("danger")
                            input.parentElement.classList.add("success")
                            textValidation.textContent = "Верный номер"
                        }
                    })
                }

                if (input.id == "popup-input-email") {
                    let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (!email.test(input.value)) {
                        console.log("Неверно")
                        input.parentElement.classList.add("danger");
                        input.parentElement.classList.remove("success");
                        textValidation.textContent = "Введите беларусский номер";
                        error++;
                    } else {
                        console.log("Верно")
                        input.parentElement.classList.remove("danger")
                        input.parentElement.classList.add("success")
                        textValidation.textContent = "Верный номер"
                    }

                    input.addEventListener("input", function() {
                        if (!email.test(input.value)) {
                            console.log("Неверно")
                            input.parentElement.classList.add("danger")
                            input.parentElement.classList.remove("success")
                            textValidation.textContent = "Введите беларусский номер";
                        } else {
                            console.log("Верно")
                            input.parentElement.classList.remove("danger")
                            input.parentElement.classList.add("success")
                            textValidation.textContent = "Верный номер"
                        }
                    })
                }

            })
            
            if (error == 0) {
                console.log("success")

                // Сброс формы при отправке
                form.reset();
                form.querySelectorAll(".popup__input").forEach(inp => {
                    inp.parentElement.classList.remove("success")
                    if (inp.id == "popup-input-name") {
                        inp.nextElementSibling.textContent = "Ваше имя"
                    }
                    if (inp.id == "popup-input-number") {
                        inp.nextElementSibling.textContent = "Ваш номер телефона"
                    }
                })
            } else {
                console.log("error")
            }
        })
    })
}
validation()

