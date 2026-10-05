/* MOBILE HEADER */
const botonMenu = document.querySelector(".header-menu-toggle");
const menuMobile = document.querySelector(".mobile-nav-panel");
const botonCerrar = document.querySelector(".mobile-nav-close");

botonMenu.addEventListener("click", () => {

    menuMobile.classList.toggle("active");
});

botonCerrar.addEventListener("click", () => {

    menuMobile.classList.remove("active");
});


/* MINI CARRITO */
const botonesCarrito = document.querySelectorAll("#open-cart, #open-cart-mobile");

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
const botonesUsuario = document.querySelectorAll("#open-user, #open-user-mobile");

const userNav = document.querySelector(".user-nav-panel");
const botonCerrarUserNav = document.querySelector(".user-nav-close");

botonesUsuario.forEach((boton) => {

    boton.addEventListener("click", (event) => {
        event.preventDefault();
        userNav.classList.toggle("active");
        menuMobile.classList.remove("active");
    });
});

botonCerrarUserNav.addEventListener("click", () => {

    userNav.classList.remove("active");
});

/* MODALS */

const modalDelete = crearModal("modal-delete");
const modalSuccess = crearModal("modal-success");
const modalError = crearModal("modal-error");

function crearModal(overlayId) {
    const overlay = document.getElementById(overlayId);
    if (!overlay) return;

    const cerrarModal = () => overlay.classList.remove("active");

    overlay.querySelectorAll(".modal-close, .modal-btn").forEach((btn) => {
        btn.addEventListener("click", cerrarModal);
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) cerrarModal();
    });

    return {
        abrir: () => overlay.classList.add("active"),
        cerrar: cerrarModal
    };
}

document.querySelectorAll(".cart-item-remove, .minicart-item-remove").forEach((btn) => {
    
    btn.addEventListener("click", () => {
        modalDelete.abrir();
    });
});

document.querySelectorAll(".contact-btn").forEach((btn) => {
    
    btn.addEventListener("click", () => {
        modalSuccess.abrir();
    });
});

document.querySelectorAll(".profile-btn").forEach((btn) => {
    
    btn.addEventListener("click", () => {
        modalError.abrir();
    });
});