import './style.css'

//01 -Expansão de Arrays
const frutas = ["maçã", "banana", "laranja"];

// Crie um novo array usando spread para adicionar "uva" e "manga"
const frutasAdicionadas = [...frutas, "uva", "manga"];

// Imprima o array original e o novo
console.log(frutas);
console.log(frutasAdicionadas);

//----------------------------------------//

//02 - Copiando Arrays
const numeros = [10, 20, 30, 40];

// Faça uma cópia usando spread
let numerosCopia = [...numeros];

// Altere um valor na cópia
numerosCopia[2] = 5

// Verifique se o original foi alterado
console.log(numeros)
console.log(numerosCopia)

//----------------------------------------//

//03 - Unindo Arrays
const animais1 = ["gato", "cachorro", "coelho"];
const animais2 = ["tartaruga", "papagaio", "cavalo"];

// Use spread para unir os dois arrays
let animaisTotal = [...animais1, ...animais2]
console.log(animaisTotal)

// Ordene alfabeticamente
let animaisOrdenados = [...animaisTotal].sort()

console.log(animaisOrdenados)
console.log(animaisTotal)

//----------------------------------------//

//04 - Passando Elementos como Argumentos
function soma(a, b, c) {
  return a + b + c;
}

const valores = [5, 7, 12];

// Use spread para passar os valores para a função soma e imprimna a saída no console
console.log(soma(...valores))

//----------------------------------------//

//05 - Spread em Objetos
const usuario = {
  nome: "Caio",
  idade: 25
};

// Crie um novo objeto adicionando a propriedade cidade usando spread
let usuarioCompleto = {
    ...usuario, 
    cidade : "Naviraí"
}

// imprima no console dos dois objetos
console.log(usuario)
console.log(usuarioCompleto)

//----------------------------------------//

//06 - Atualizando Dados de Objetos
const config = {
  tema: "claro",
  layout: "grid"
};

// Use o spread para criar um novo objeto  alterando o tema para "escuro".
let configEscuro = {
    ...config,
    tema : "escuro"
}

console.log(configEscuro)