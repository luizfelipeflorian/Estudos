let inputItem = document.querySelector('#item');
let btnAdicionar = document.querySelector('#btnAdicionar');
let ulListaCompras = document.querySelector('#listaCompras');
let contador = document.querySelector('#contador');

let listaCompras = [];

if (localStorage.getItem('lista')) {
    listaCompras = JSON.parse(localStorage.getItem('lista'));
}

function adicionarItem() {
    let item = inputItem.value;
    if (item.trim() === '') { // Verifica se o campo está vazio ou contém apenas espaços
        alert('Por favor, insira um item!');
        return;
    }
    listaCompras.push(item);
    renderLista();
    atualizarContador();
    localStorage.setItem('lista', JSON.stringify(listaCompras));
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
}
renderLista();
atualizarContador();

btnAdicionar.onclick = adicionarItem;