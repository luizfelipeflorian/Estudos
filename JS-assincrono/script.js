let mensagem = "Iniciando o script...";
console.log(mensagem);
function carregarDados(callback) {
    console.log("Executando Função...");
    setTimeout(function () {
        console.log("Executou depois de 5 segundos");
        let disciplinas = ['Desenvolvimento web', 'Banco de Dados']
        callback(disciplinas);
    }, 5000);
}

console.log("Buscando dados...");
carregarDados(function (disciplinas) {
    console.log(disciplinas);
});
console.log("Fim da execução");


//FUNÇÕES DE PRIMEIRA CLASSE//
//Declaração de função//
function ola() {
    console.log("Olá");
}
ola();

//atribuição de função / função anônima//

let saudacao = function () { //Função anônima (sem nome)
    console.log("Olá ciclano");
}
saudacao();
//passagem de função como parâmetro de outra função//
//Callback//
function msg(fn) {
    fn("Fulano");
}

msg(function (nome) {
    console.log("Olá " + nome);
});