window.onload = function() {


function showTime() {
    const clock = document.getElementById("clock");
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    clock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
    setTimeout(showTime, 1000); // actualizar cada segundo
  }
/*
 showTime()
 function actualizar() {
  var contador = parseInt(localStorage.getItem("contador")); // Obtener el valor actual del contador desde el almacenamiento local

  if (isNaN(contador)) {
    contador = 0; // Si el contador no existe o no es un número, iniciar en 0
  }

  contador++; // Incrementar el contador en 1

  localStorage.setItem("contador", contador); // Guardar el nuevo valor del contador en el almacenamiento local

  document.getElementById("contador").textContent = contador; // Mostrar la cantidad de actualizaciones en el elemento con id "contador"
}
actualizar()*/

function actualizar() {
  var contador = parseInt(localStorage.getItem("contador")); // Obtener el valor actual del contador desde el almacenamiento local

  if (isNaN(contador)) {
    contador = 0; // Si el contador no existe o no es un número, iniciar en 0
  }

  contador++; // Incrementar el contador en 1

  localStorage.setItem("contador", contador); // Guardar el nuevo valor del contador en el almacenamiento local

  document.getElementById("contador").textContent = contador; // Mostrar la cantidad de visitas en el elemento con id "contador"
}


const boton = document.getElementById('boton');
const contador = document.getElementById('contador');

boton.addEventListener('click', () => {
  let cantidadActual = parseInt(contador.innerText);
  if (cantidadActual > 0) {
    cantidadActual--;
    contador.innerText = cantidadActual;
  }
});
};
