let foodIcons = [...document.querySelectorAll(".food")]
let menuBtn = document.querySelector(".menu-btn")
let nav = document.querySelector(".nav")
let navLink = document.querySelectorAll(".nav-link")


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

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active")
    nav.classList.toggle("is-active")

    if(menuBtn.classList.contains("is-active")){
        menuBtn.setAttribute("aria-expanded", "true")
        menuBtn.setAttribute("aria-pressed", "true")
        navLink.forEach(e => {
            e.setAttribute("tabindex","0")
        });
    }
    else{
        menuBtn.setAttribute("aria-expanded", "false")
        menuBtn.setAttribute("aria-pressed", "false")
        navLink.forEach(e => {
            e.setAttribute("tabindex","-1")
        });
    }
})