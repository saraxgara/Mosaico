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


/* MINI CARRITO */
const botonesCarrito = document.querySelectorAll(
    "#open-cart, #open-cart-mobile"
);

const minicart = document.querySelector(".minicart-panel");
const botonCerrarMinicart = document.querySelector(".minicart-close");

botonesCarrito.forEach((boton) => {

    boton.addEventListener("click", (event) => {
        event.preventDefault();
        minicart.classList.toggle("active");
    });
});

botonCerrarMinicart.addEventListener("click", () => {
    minicart.classList.remove("active");
});


/* USER NAV */
const botonesUsuario = document.querySelectorAll(
    "#open-user, #open-user-mobile"
);

const userNav = document.querySelector(".user-nav-panel");
const botonCerrarUserNav = document.querySelector(".user-nav-close");

botonesUsuario.forEach((boton) => {

    boton.addEventListener("click", (event) => {
        event.preventDefault();
        userNav.classList.toggle("active");
        menuMobile.classList.remove("active");
        botonMenu.setAttribute("aria-expanded", "false");
    });
});

botonCerrarUserNav.addEventListener("click", () => {
    userNav.classList.remove("active");
});