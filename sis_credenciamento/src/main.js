import './style.css'

let inputname = document.querySelector("#nome-participante");
let buttoncheckIn = document.querySelector("#btn-check-in");
let buttonlimpar = document.querySelector("#btn-limpar");
let tableb = document.querySelector("#tabela-participantes-body"); 

let participantes = []; // Array para armazenar os participantes feito

if (localStorage.getItem('lista')) { 
    participantes = JSON.parse(localStorage.getItem('lista'));
    renderizarListaParticipantes();
}

function fazerCheckIn() { //adiciona o nome do participante na lista
    let name = inputname.value;
    if (!validarDados(name)) return;
    if (!validarCopia(name)) return;
    if (!validarLetras(name)) return;
    participantes.push(name);
    participantes.sort();
    renderizarListaParticipantes();
    inputname.value = '';
    atualizarLocalStorage();
}

function renderizarListaParticipantes() { // renderiza a lista de participantes na tabela
    tableb.innerHTML = '';
    for (let name of participantes) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = name;
        tableb.appendChild(tr);
        tr.appendChild(td);
    }
}

function validarDados(name) { // valida se o nome é vazio
    if (name.trim() == '') {
        alert("Digite um nome para adicionar!");
        return false;
    } else {
        return true;
    }
}

function validarCopia(name) { // valida se o nome já existe na lista
    if (participantes.includes(name.trim())) {
        alert("Esse nome já foi adicionado!");
        return false;
    }
    return true;
}

function validarLetras(name) { // valida se o nome contém apenas letras
    let regex = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!regex.test(name)) {
        alert("Digite apenas letras!");
        return false;
    }
    return true;
}

function limparLista() { // limpa a lista de participantes
    if (confirm("Você tem certeza que deseja limpar a lista?")) {
        participantes = [];
        tableb.innerHTML = '';
        localStorage.removeItem('lista');
    }
}

function atualizarLocalStorage() { // atualiza o localStorage com a lista de participantes
    localStorage.setItem('lista', JSON.stringify(participantes));
}

buttoncheckIn.onclick = fazerCheckIn;
buttonlimpar.onclick = limparLista;