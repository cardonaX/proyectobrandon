/* =========================================================
   FUNCIONES INTERACTIVAS DE LA INVITACIÓN
   ========================================================= */

// Selecciona el botón del sobre y las secciones principales.
const botonSobre = document.getElementById("abrirSobre");
const portada = document.getElementById("portada");
const invitacion = document.getElementById("invitacion");

// Al tocar el sobre, reproduce la animación y revela la invitación.
botonSobre.addEventListener("click", () => {
    // Evita que se vuelva a activar mientras se está abriendo.
    botonSobre.disabled = true;
    botonSobre.classList.add("abierto");

    // Espera a que avance la animación para mostrar el contenido.
    window.setTimeout(() => {
        portada.style.display = "none";
        invitacion.classList.remove("oculto");

        // Lleva suavemente al inicio de la invitación.
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1300);
});


// =========================================================
// CONTROL DE MÚSICA
// =========================================================

// Elementos del reproductor.
const cancion = document.getElementById("cancion");
const botonMusica = document.getElementById("botonMusica");
const iconoMusica = document.getElementById("iconoMusica");
const textoMusica = document.getElementById("textoMusica");

// Reproduce o pausa la canción cuando el invitado toca el botón.
botonMusica.addEventListener("click", async () => {
    if (cancion.paused) {
        try {
            await cancion.play();
            iconoMusica.textContent = "Ⅱ";
            textoMusica.textContent = "Pausar música";
        } catch (error) {
            textoMusica.textContent = "Agrega tu canción en assets/musica/";
        }
    } else {
        cancion.pause();
        iconoMusica.textContent = "▶";
        textoMusica.textContent = "Reproducir música";
    }
});

// Si el archivo de música no está colocado, el botón informa dónde ponerlo.
cancion.addEventListener("error", () => {
    textoMusica.textContent = "Agrega tu canción en assets/musica/";
});
