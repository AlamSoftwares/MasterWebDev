

//navbar
let nav = document.getElementById("navbar");
let li = document.getElementById("nav-list");
let menu = document.getElementById("menu");
let menu2 = document.getElementById("menu2");
let body = document.querySelector("body");
let hr = document.getElementById("hr");



menu.addEventListener("click", () => {
    nav.style.height = "100%"
    menu2.style.display = "block"
    menu.style.display = "none"
    hr.style.display = "block"
    body.style.overflow = "hidden"
    li.style.display = "block"
    li.style.height = "70vh"
})
menu2.addEventListener("click", () => {
    nav.style.height = "100px"
    li.style.display = "none"
    li.style.height = "0px"
    menu2.style.display = "none"
    menu.style.display = "block"
    hr.style.display = "none"
    body.style.overflow = "visible"

})




