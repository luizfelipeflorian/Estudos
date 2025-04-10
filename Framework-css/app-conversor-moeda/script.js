let inputBRL = document.querySelector('#BRL');
let inputUSD = document.querySelector('#USD');
let btnConverter = document.querySelector('button');
let divAlerta = document.querySelector('#ALERTA');

/* definir a função que responderá ao evento do usuário */
function converter() {
    divAlerta.textContent = ("$ " + (inputBRL.value / inputUSD.value).toFixed(2));
}

btnConverter.onclick = converter; // atribuir a função ao evento