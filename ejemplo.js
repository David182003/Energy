function showContent() {
    var password = prompt("Ingrese la contraseña para ver el contenido:");
    if (password === "hWioEJ08xjfT21t") {
      document.getElementById("contenido").style.display = "block";
    } else {
      alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
  }
  let contador = 0;
if (localStorage.getItem("contador")) {
  contador = localStorage.getItem("contador");
}
contador++;
localStorage.setItem("contador", contador);
document.getElementById("contador").innerHTML = contador;
