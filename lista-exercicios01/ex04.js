let btn = document.querySelector("button");
let inputprecokg = document.querySelector("#precokg");
let inputpesog = document.querySelector("#pesog");
let divpagar = document.querySelector("#pagar");

function calcpagar() {
divpagar.textContent = ("Valor a Pagar R$ " + ((inputprecokg.value * inputpesog.value) / 1000).toFixed(2));
}

btn.onclick = calcpagar;