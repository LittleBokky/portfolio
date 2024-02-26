document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los enlaces de navegación internos
    const links = document.querySelectorAll('a[href^="#"]');

    // Recorre cada enlace
    links.forEach(link => {
        // Agrega un evento de clic a cada enlace
        link.addEventListener("click", function (event) {
            // Previene el comportamiento predeterminado del enlace
            event.preventDefault();

            // Obtiene el objetivo del enlace (la sección a la que se desplazará)
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            // Desplaza suavemente hacia el objetivo
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
