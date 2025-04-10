let btn = document.querySelector('button');
let inputhorasmes = document.querySelector('#horasmes');
let inputvalormes = document.querySelector('#valorhora');
let divtotal = document.querySelector('#total');

function calcular() {
divtotal.textContent = ("Salário igual a R$ " + (inputhorasmes.value * inputvalormes.value).toFixed(2));
}

btn.onclick = calcular;