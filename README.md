# MosaiCo

Maquetación frontend del Trabajo Final de Máster de Diseño UX/UI y Desarrollo Web (FlashData Academy).

MosaiCo es un marketplace de productos artesanales de cerámica y velas que también permite reservar plaza en talleres sobre ambas disciplinas. El proyecto reúne en una sola plataforma la compra de productos y la reserva de talleres.

Esta carpeta contiene la maquetación estática del producto. No está conectada a un servidor ni a una base de datos: el contenido es de ejemplo.

## Enlaces

- Proyecto publicado: Este proyecto no es público.
- Archivo de Figma: https://www.figma.com/design/cCHhilBB6wMvDDFaK7H6Tf/TFM-MosaiCo?node-id=39-63&t=1L2VqU4xAc5BHty1-1

## Tecnologías

- HTML5 semántico
- CSS3 (Flexbox, Grid, variables CSS, transiciones y animaciones)
- JavaScript básico, sin librerías ni frameworks

## Cómo visualizarlo

Las rutas de los archivos CSS, JS e imágenes empiezan por `/` (por ejemplo, `/css/main.css`), así que el proyecto tiene que abrirse desde un servidor local. Si se abre un archivo haciendo doble clic, los estilos y las imágenes no cargarán.

1. Abre la carpeta del proyecto en Visual Studio Code.
2. Instala la extensión **Live Server**.
3. Haz clic derecho sobre `index.html` y elige **Open with Live Server**.

La navegación entre páginas funciona desde el menú.

## Estructura de carpetas

/
├── index.html
├── README.md
├── pages/
│   ├── product-catalog.html
│   ├── product-sheet.html
│   ├── workshop-catalog.html
│   ├── workshop-sheet.html
│   ├── favorites.html
│   ├── cart.html
│   ├── payment.html
│   ├── confirmation.html
│   ├── profile.html
│   ├── login.html
│   ├── signin.html
│   ├── contact.html
│   ├── favorite-empty.html          (estado vacío)
│   ├── payment-disabled.html        (estado deshabilitado)
│   └── product-catalog-loading.html (estado de carga)
├── components/                      (componentes maquetados de forma aislada)
│   ├── cards.html
│   ├── footer.html
│   ├── header.html
│   ├── headlines.html
│   ├── inputs.html
│   ├── minicart.html
│   ├── modals.html
│   ├── nav-phone.html
│   ├── upper-footer.html
│   └── user-nav.html
├── css/
│   ├── main.css                     (reúne el resto de hojas de estilo)
│   ├── base/
│   │   ├── reset.css
│   │   └── variables.css
│   ├── components/
│   │   ├── cards.css
│   │   ├── footer.css
│   │   ├── header.css
│   │   ├── headlines.css
│   │   ├── minicart.css
│   │   ├── modals.css
│   │   ├── nav-phone.css
│   │   ├── upper-footer.css
│   │   └── user-nav.css
│   └── pages/
│       ├── auth.css
│       ├── cart.css
│       ├── confirmation.css
│       ├── contact.css
│       ├── favorites.css
│       ├── index.css
│       ├── payment.css
│       ├── product-catalog.css
│       ├── profile.css
│       ├── sheet-page.css
│       └── workshop-catalog.css
├── js/
│   └── main.js
└── assets/
    ├── icons/
    ├── images/
    └── logo/
    
El CSS está organizado en tres niveles: `base` (reset y variables), `components` (un archivo por componente reutilizable) y `pages` (estilos propios de cada pantalla).

## Pantallas

Inicio, catálogo de productos, ficha de producto, catálogo de talleres, ficha de taller, favoritos (con su estado vacío), carrito, pago, confirmación, perfil, inicio de sesión, registro, contacto y estado de carga del catálogo.

## Qué incluye

- Diseño responsive para escritorio y móvil (punto de corte principal: 680 px).
- Variables CSS que reproducen los tokens definidos en Figma (color, tipografía y espaciado).
- Componentes reutilizables: tarjetas de producto y de taller, botones, campos de formulario y paneles superpuestos.
- Menú móvil, minicarrito y menú de usuario como paneles superpuestos con transición.
- Aparición suave de las secciones de Inicio al hacer scroll.
- Transición breve al entrar y salir de cada página.
- Formularios con validación nativa del navegador.
- Estados de interfaz: hover, focus, vacío y carga.
- Animaciones desactivadas para quien tiene activada la preferencia de movimiento reducido en su sistema.

## Limitaciones

- El contenido es estático: no hay datos reales ni backend.
- Los botones de cantidad, favoritos y eliminar están maquetados pero no modifican ningún dato.
- Los formularios usan solo la validación del navegador, sin mensajes de error propios.
- El header y los paneles superpuestos se repiten en cada archivo HTML, porque el proyecto no usa plantillas.

## Autoría

Sara García Aladrén. Proyecto individual.

