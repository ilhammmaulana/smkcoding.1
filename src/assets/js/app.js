console.log('Name: Ilhamm Maulana - SMK HIDAYAH')


const humberger = document.querySelector(".hamburger-menu");
const btnCloseNavbarMobile = document.querySelector(".navbar-btn-close");
const navbarMobile = document.querySelector(".navbar-mobile");
const body = document.querySelector("body");
humberger.addEventListener("click", () => {
    navbarMobile.classList.toggle("active");
    if (window.getComputedStyle(document.body).overflowY === "hidden") {
        document.body.style.overflowY = "scroll";
    } else {
        document.body.style.overflowY = "hidden";
    }
    humberger.classList.toggle("change");
});
