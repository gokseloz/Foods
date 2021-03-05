let food = [...document.querySelectorAll(".food")]
let menuBtn = document.querySelector(".menu-btn")
let nav = document.querySelector(".nav")

i = 0;

setInterval(() => {
    i++
    let icon = document.querySelector(".change")
    icon.classList.remove("change")

    if (i >= food.length) {
        food[0].classList.add('change')
        i = 0

    } else {
        icon.nextElementSibling.classList.add("change")
    }
}, 3000);

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active")
    nav.classList.toggle("is-active")
} )