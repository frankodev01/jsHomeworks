let burgerMenu = document.getElementById("burgerMenu");
let iElement = document.querySelector("i");
let nav = document.querySelector("nav");
let scroll = document.querySelector(".scroll")

burgerMenu.addEventListener("click", function() {
    nav.classList.toggle("menu-opened");
    iElement.classList.toggle("fa-bars");
    iElement.classList.toggle("fa-x");
});

scroll.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

