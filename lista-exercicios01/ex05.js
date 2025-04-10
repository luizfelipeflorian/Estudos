let btn = document.querySelector("button");
let inputvalorhr = document.querySelector("#valorhr");
let inputminutos = document.querySelector("#minutos");
let divpagar = document.querySelector("#pagar");

function calcular() {
divpagar.textContent = "Valor a pagar R$ " + ((inputvalorhr.value) * (inputminutos.value) / 60).toFixed(2);
}

btn.onclick = calcular;