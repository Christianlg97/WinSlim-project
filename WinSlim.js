// Espera a que la página termine de cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el elemento <main>
    const main = document.querySelector("main");
    
    // Agrega la clase 'visible' al <main> para activar la transición
    main.classList.add("visible");
});

// Selección de elementos
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementById("closeModal");

// Función para abrir el modal al hacer clic en una imagen
document.querySelectorAll(".clickable-image").forEach((img) => {
    img.addEventListener("click", function () {
        modal.style.display = "flex"; // Mostrar el modal
        modalImg.src = this.src; // Usar la fuente de la imagen seleccionada
        captionText.innerText = this.alt; // Usar el texto alternativo como pie
    });
});

// Función para cerrar el modal al hacer clic en la 'X'
closeModal.addEventListener("click", function () {
    modal.style.display = "none"; // Ocultar el modal
});

// Función para cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Ocultar el modal
    }
});

// Asegurarse de que el modal esté oculto al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    modal.style.display = "none"; // Ocultar el modal
});