// Exemplo 1
console.log("Exemplo 1");
let listaFilmes = ['Minecraft','Rei Leão']; // criação de um vetor
//let listaFilmes = new Array('Minecraft','Rei Leão'); // criação de um vetor
listaFilmes[2] = 'Star Wars'; // adicionando um elemento no vetor
listaFilmes[3] = 'Harry Potter';
listaFilmes[10] = 'Harry Potter'; // adicionando um elemento no vetor entre os indices 4 e 9, o valor será vazio
listaFilmes.push('Avatar'); // adicionando um elemento no vetor no final
listaFilmes.unshift('Avatar2'); // adicionando um elemento no vetor no começo
//listaFilmes = "filme teste"; // mudando o valor do vetor para uma string, o vetor não existe mais
console.log(listaFilmes);  // imprimindo o vetor
console.log(listaFilmes[0]); // acessando o primeiro elemento do vetor
console.log(listaFilmes[1]);
console.log(listaFilmes[2]);
let tamanho = listaFilmes.length; // tamanho do vetor
console.log(tamanho); // acessando o tamanho do vetor

listaFilmes.pop(); // remove o último elemento do vetor
listaFilmes.shift(); // remove o primeiro elemento do vetor
console.log(listaFilmes);
console.log(listaFilmes[0]);
console.log(listaFilmes[1]);
console.log(listaFilmes[2]);
tamanho = listaFilmes.length;
console.log(tamanho);

//Exemplo 2 
console.log("Exemplo 2");
let botoes = document.querySelectorAll('button'); // selecionando todos os botões
console.log(botoes); // imprimindo os botões

// Exemplo 3
console.log("Exemplo 3");
let inputsValores = document.querySelectorAll('.valor'); // selecionando todos os inputs de texto

for (let i = 0; i < inputsValores.length; i++) { // for tradicional
    let input = inputsValores[i]; 
    input.readOnly = true; // desabilitando o input de texto
    input.classList.add('input-success'); // adicionando a classe de input desabilitado
}
//outro tipo de for
for (let inputValor of inputsValores) { // for of
    inputValor.readOnly = true; // desabilitando o input de texto
    inputValor.classList.add('input-success'); // adicionando a classe de input desabilitado
}