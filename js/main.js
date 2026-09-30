/* MOBILE HEADER */
const botonMenu = document.querySelector(".header-menu-toggle");
const menuMobile = document.querySelector(".mobile-nav-panel");
const botonCerrar = document.querySelector(".mobile-nav-close");

botonMenu.addEventListener("click", () => {

    menuMobile.classList.toggle("active");
    const menuAbierto = menuMobile.classList.contains("active");
    botonMenu.setAttribute("aria-expanded", menuAbierto);
});

botonCerrar.addEventListener("click", () => {

    menuMobile.classList.remove("active");
    botonMenu.setAttribute("aria-expanded", "false");
});