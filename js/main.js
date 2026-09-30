/* MOBILE HEADER */
const botonMenu = document.querySelector(".header-menu-toggle");
const menuMovil = document.querySelector("#mobile-menu");

botonMenu.addEventListener("click", () => {
    menuMovil.classList.toggle("oculto");
});
// 1. Seleccionamos el botón y el menú
const menu = document.querySelector(".nav-links");
 
// 2. Escuchamos el clic en la hamburguesa
boton.addEventListener("click", () => {
    // 3. Quitamos/ponemos la clase 'active' a ambos
    boton.classList.toggle("active");
});