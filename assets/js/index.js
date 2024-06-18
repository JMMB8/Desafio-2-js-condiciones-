// js  requerimiento 2
function verificarPedido() {
  let cantidadA = parseInt(document.getElementById("stickerA").value);
  let cantidadB = parseInt(document.getElementById("stickerB").value);
  let cantidadC = parseInt(document.getElementById("stickerC").value);

  let totalStickers = cantidadA + cantidadB + cantidadC;

  let mensaje = document.getElementById("mensaje");

  if (totalStickers <= 10) {
    mensaje.textContent = "Llevas " + totalStickers + " stickers.";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Llevas demasiados stickers.";
    mensaje.style.color = "red";
  }
}

// js requerimiento 3

function validarpassword() {
  let numeroA = document.getElementById("numero1").value;
  let numeroB = document.getElementById("numero2").value;
  let numeroC = document.getElementById("numero3").value;

  if (numeroA === "9" && numeroB === "1" && numeroC === "1") {
    document.getElementById("mensajes").innerHTML = "Password 1 es correcto";
    mensajes.style.color = "green";
  } else if (numeroA === "7" && numeroB === "1" && numeroC === "4") {
    document.getElementById("mensajes").innerHTML = "Password 2 es correcto";
    mensajes.style.color = "green";
  } else {
    document.getElementById("mensajes").innerHTML = "Password es incorrecto";
    mensajes.style.color = "red";
  }
}
