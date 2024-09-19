const button = document.querySelector("button");
const error_msg = document.querySelectorAll(".err-msg");
const error_icon = document.querySelectorAll(".error-icon");
const input = document.querySelectorAll("input");
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = document.querySelector(".email");
const email_err_msg = document.querySelector(".email-error-msg");



button.addEventListener("click", function () {
    for (let i = 0; i < input.length; i++) {
        if (!input[i].value) {
            error_msg[i].classList.toggle("hidden");
            error_icon[i].classList.toggle("hidden");
        }
    }

    const userEmail = email.value;
    if (!emailRegex.test(userEmail)) {
        email_err_msg.classList.remove("hidden");
    } else {
        email_err_msg.classList.add("hidden");
    }
});
