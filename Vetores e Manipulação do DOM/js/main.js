let inputItem = document.querySelector('#item');
let btnAdicionar = document.querySelector('#btnAdicionar');
let ulListaCompras = document.querySelector('#listaCompras');

function adicionarItem() {
    let item = inputItem.value;
    let li = document.createElement("li");
    li.textContent = item;
    li.classList.add('list-item', 'border-b-1', 'border-primary', 'p-2');
    ulListaCompras.appendChild(li);
}

btnAdicionar.onclick = adicionarItem