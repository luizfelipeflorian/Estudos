let inputItem = document.querySelector('#item');
let btnAdicionarFinal = document.querySelector('#btnAdicionarF');
let btnAdicionarInicio = document.querySelector('#btnAdicionarI');
let ulListaCompras = document.querySelector('#listaCompras');
let contador = document.querySelector('#contador');
let btnRemoverUltimo = document.querySelector('#btnRemovU');
let btnRemoverPrimeiro = document.querySelector('#btnRemovP');

let listaCompras = [];

if (localStorage.getItem('lista')) {
    listaCompras = JSON.parse(localStorage.getItem('lista'));
    renderLista(); // Renderiza a lista ao carregar a página
    atualizarContador(); // Atualiza o contador ao carregar a página
}

function adicionarItemInicio() {
    let item = inputItem.value;
    if (!validarInput(item)) return; // Chama a função de validação
    listaCompras.unshift(item); // Adiciona o item no início do array
    atualizarStorage(); // Atualiza o armazenamento local e renderiza a lista
}

function adicionarItemFinal() {
    let item = inputItem.value;
    if (!validarInput(item)) return; // Chama a função de validação
    listaCompras.push(item); // Adiciona o item no final do array
    atualizarStorage(); // Atualiza o armazenamento local e renderiza a lista
}

function removerItemPrimeiro() {
    if (listaCompras.length < 1) { // Verifica se a lista está vazia
        alert('A lista já está vazia!');
        return;
    }
    listaCompras.shift(); // Remove o primeiro item do array
    atualizarStorage(); // Atualiza o armazenamento local e renderiza a lista
}

function removerItemUltimo() {
    if (listaCompras.length < 1) { // Verifica se a lista está vazia
        alert('A lista já está vazia!');
        return;
    }
    listaCompras.pop(); // Remove o último item do array
    atualizarStorage(); // Atualiza o armazenamento local e renderiza a lista
}

function renderLista() {
    ulListaCompras.innerHTML = ''; // Limpa a lista antes de renderizar novamente
    for (let item of listaCompras) {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add('list-item', 'border-b-1', 'border-primary', 'p-2');
        ulListaCompras.appendChild(li);
        console.log(listaCompras);
    }
}

function atualizarContador() {
    contador.textContent = "Total de itens: " + listaCompras.length;
    if (listaCompras.length === 0) { // Verifica se a lista está vazia
        contador.textContent = "Lista vazia! Adicione itens.";
    }
}

function validarInput(item) {
    if (item.trim() == '') { // Verifica se o campo está vazio ou contém apenas espaços
        alert('Por favor, insira um item!');
        return false;
    }
    return true; // Retorna verdadeiro se o item for válido
}

function atualizarStorage() {
    renderLista();
    atualizarContador();
    inputItem.value = ''; // Limpa o campo de entrada após adicionar o item
    localStorage.setItem('lista', JSON.stringify(listaCompras));
}

renderLista();
atualizarContador();

btnAdicionarInicio.onclick = adicionarItemInicio;
btnAdicionarFinal.onclick = adicionarItemFinal;
btnRemoverPrimeiro.onclick = removerItemPrimeiro;
btnRemoverUltimo.onclick = removerItemUltimo;