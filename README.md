# MosaiCo

Maquetación frontend del Trabajo Final de Máster de Diseño UX/UI y Desarrollo Web (FlashData Academy).

MosaiCo es un marketplace de productos artesanales de cerámica y velas que también permite reservar plaza en talleres sobre ambas disciplinas. El proyecto reúne en una sola plataforma la compra de productos y la reserva de talleres.

Esta carpeta contiene la maquetación estática del producto. No está conectada a un servidor ni a una base de datos: el contenido es de ejemplo.

## Enlaces

- Proyecto publicado: https://github.com/saraxgara/Mosaico
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

- index.html: es la página principal del sitio web y el punto de entrada para el usuario.

- README.md: contiene la documentación del proyecto, con información sobre su estructura, funcionamiento e instrucciones de uso.

- pages/: reúne las páginas HTML del sitio, organizadas según las distintas funcionalidades, como el catálogo de productos y talleres, las fichas de detalle, los favoritos, el carrito, el pago, el perfil y la autenticación. También incluye páginas específicas para representar estados como la carga, el contenido vacío o las opciones deshabilitadas.

- components/: contiene componentes HTML maquetados de forma aislada, como tarjetas, cabecera, pie de página, formularios, modales y elementos de navegación. Esto facilita su diseño, revisión y reutilización en distintas partes del sitio.

- css/: organiza los estilos del proyecto en tres niveles:

base/: contiene los estilos generales, como el reinicio de los estilos predeterminados del navegador (reset.css) y las variables globales de diseño (variables.css).

components/: incluye una hoja de estilos por cada componente reutilizable.

pages/: reúne los estilos específicos de cada página o tipo de pantalla.

main.css: centraliza la importación del resto de hojas de estilo para mantener organizada su carga.

- js/: contiene main.js, el archivo JavaScript principal, encargado de gestionar las interacciones y funcionalidades del sitio.

- assets/: almacena los recursos gráficos del proyecto, organizados en tres carpetas: icons/ para iconos, images/ para imágenes y logo/ para los logotipos.

## Pantallas

Inicio, catálogo de productos, ficha de producto, catálogo de talleres, ficha de taller, favoritos (con su estado vacío), carrito, pago, confirmación, perfil, inicio de sesión, registro, contacto y estado de carga del catálogo.

## Qué incluye

- Diseño responsive para escritorio y móvil (punto de corte principal: 680 px).
- Variables CSS que reproducen los tokens definidos en Figma (color, tipografía y espaciado).
- Componentes reutilizables: tarjetas de producto y de taller, botones, campos de formulario y paneles superpuestos.
- Menú móvil, minicarrito y menú de usuario como paneles superpuestos con transición.
- Formularios con validación nativa del navegador.
- Estados de interfaz: hover, focus, vacío y carga.

## Limitaciones

- El contenido es estático: no hay datos reales ni backend.
- Los botones de cantidad, favoritos y eliminar están maquetados pero no modifican ningún dato.
- Los formularios usan solo la validación del navegador, sin mensajes de error propios.
- El header y los paneles superpuestos se repiten en cada archivo HTML, porque el proyecto no usa plantillas.

## Autoría

Sara García Aladrén. Proyecto individual.

