
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaCarga = document.getElementById("pantalla-carga");
const contenidoManual = document.getElementById("contenido-manual");

const botonEntrar = document.getElementById("btn-entrar");
const botonSalir = document.getElementById("btn-salir");

botonEntrar.addEventListener("click", function () {
  pantallaInicio.classList.add("oculto");
  pantallaCarga.classList.remove("oculto");

  setTimeout(function () {
    pantallaCarga.classList.add("oculto");
    contenidoManual.classList.remove("oculto");
    window.scrollTo(0, 0);
  }, 1000);
});

botonSalir.addEventListener("click", function () {
  contenidoManual.classList.add("oculto");
  pantallaInicio.classList.remove("oculto");
});