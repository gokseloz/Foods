let food = [...document.querySelectorAll(".food")]
let menuBtn = document.querySelector(".menu-btn")
let nav = document.querySelector(".nav")
let navLink = [...document.querySelectorAll(".nav-link")]

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
    // setTimeout(() => {
    //     for (i = 0; i < navLink.length; i++) {
    //         navLink[i].style.cssText = `opacity:1; transition: opacity .2s ${i/10}s`
    //     }
    // }, 600);
    

})