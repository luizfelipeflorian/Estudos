let inputNome = document.querySelector('input');
let btnEnviar = document.querySelector('button');
let divAlerta = document.querySelector('div');

/* definir a função que responderá ao evento do usuário */
function mostrarNome() {
    divAlerta.textContent = inputNome.value
}

btnEnviar.onclick = mostrarNome; // funciona para mostrar o nome digitado quando o usuário clica no botão
inputNome.oninput = mostrarNome; // funciona para mostrar o nome enquanto o usuário digita