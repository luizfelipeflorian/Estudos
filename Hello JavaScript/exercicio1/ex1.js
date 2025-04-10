/* 1° Selecionar os elementos que serão manipulados */
let btn = document.querySelector('button'); // Seleciona o botão
let divDisplay = document.querySelector('div'); // Seleciona a div

/* 2° Definir a função que será executada quando o evento ocorrer */
function changeColor2() {
    divDisplay.className = 'cor2'; // Altera a classe da div para cor2
    btn.onclick = changeColor1; // Altera a função do botão para changeColor1
}
function changeColor1() {
    divDisplay.className = 'cor1'; // Altera a classe da div para cor2
    btn.onclick = changeColor2; // Altera a função do botão para changeColor2
}

// as funções changeColor1 e changeColor2 são chamadas de callback
// pois são passadas como argumento para outra função
// e são executadas posteriormente gerando um "loop"

/* 3° Vincula a função ao evento que será disparado pelo elemento */
btn.onclick = changeColor2; // Executa a função changeColor() ao clicar no botão