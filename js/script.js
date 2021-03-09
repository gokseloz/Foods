// --------------
// * VARIABLES *
// --------------
let foodIcons = [...document.querySelectorAll(".food")]
let menuBtn = document.querySelector(".menu-btn")
let nav = document.querySelector(".nav")
let navLink = document.querySelectorAll(".nav-link")
let registerForm = document.querySelector(".register-form")
let registerInput = document.querySelector(".register-input")
let registerWarningText = document.querySelector(".register-warning")
let registerSuccessText = document.querySelector(".register-success")

// -----------------------------
// * INTRO SECTION - ANIMATION *
// -----------------------------
i = 0;
setInterval(() => {
    i++
    let icon = document.querySelector(".change")
    icon.classList.remove("change")

    if (i >= foodIcons.length) {
        foodIcons[0].classList.add('change')
        i = 0

    } else {
        icon.nextElementSibling.classList.add("change")
    }
}, 3000);

// -----------------------------
// * NAVBAR and ACCESSIBILITY *
// -----------------------------
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active")
    nav.classList.toggle("is-active")

    if (menuBtn.classList.contains("is-active")) {
        menuBtn.setAttribute("aria-expanded", "true")
        menuBtn.setAttribute("aria-pressed", "true")
        navLink.forEach(e => {
            e.setAttribute("tabindex", "0")
        });
    } else {
        menuBtn.setAttribute("aria-expanded", "false")
        menuBtn.setAttribute("aria-pressed", "false")
        navLink.forEach(e => {
            e.setAttribute("tabindex", "-1")
        });
    }
})

// --------------------------------------
// * REGISTER SECTION - FORM VALIDATION *
// --------------------------------------
registerInput.addEventListener("invalid", (e) => {
    e.preventDefault()
    warning()
})

registerForm.addEventListener("submit", logSubmit)

function logSubmit(e) {
    e.preventDefault()

    if (registerInput.value.length == 0) {
        warning()

    } else {
        registerSuccessText.style.display = "block"
        registerInput.value = ""

        setTimeout(() => {
            registerSuccessText.style.display = "none"
        }, 3000);
    }
}

function warning() {
    registerWarningText.style.display = "block"

    setTimeout(() => {
        registerWarningText.style.display = "none"
    }, 3000);
}