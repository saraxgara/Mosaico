/* MOBILE HEADER */
const botonMenu = document.querySelector(".header-menu-toggle");
const menuMovil = document.querySelector("#mobile-menu");

botonMenu.addEventListener("click", () => {
    menuMovil.classList.toggle("oculto");
});