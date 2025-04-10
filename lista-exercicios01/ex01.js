let inputtotal = document.querySelector('#total');
let inputquantidade = document.querySelector('#quantidade');
let divvalorcliente = document.querySelector('#valorcliente');
let btncalc = document.querySelector('button');

function valorcliente() {
    divvalorcliente.textContent = ("Valor por Cliente R$ " + (inputtotal.value / inputquantidade.value).toFixed(2));
}

btncalc.onclick = valorcliente;