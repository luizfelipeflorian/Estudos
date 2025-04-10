/* let personName = "Ziul";
personName = 200.5;
console.log('Hello JavaScript Running!!');
console.log(personName);
console.log(typeof personName); // Serve para saber o tipo de variável */

/* 1° Selecionar os elementos que serão manipulados */
let btn = document.querySelector('button'); // Seleciona o botão
let input = document.querySelector('input'); // Seleciona o input
let divDisplay = document.querySelector('.display') // Seleciona a div que exibirá o valor do input

/* 2° Definir a função que será executada quando o evento ocorrer */
function showMessage() {
    console.log(input.value); // Exibe o valor do input no console
    divDisplay.textContent = input.value; // Exibe o valor do input na div
}
/* 3° Vincula a função ao evento que será disparado pelo elemento */
btn.onclick = showMessage; // Executa a função showMessage() ao clicar no botão