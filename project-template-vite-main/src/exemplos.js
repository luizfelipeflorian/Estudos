import './style.css'

let filmes = ['Vingadores Ultimato', 'Guerra dos mundos', 'Jurassic Park']

for (let filme of filmes) {
    console.log(filme)
}

let numeros = [10, 23, 59, 33, 89]

// somar todos os numeros
let soma = 0;
for (let numero of numeros) {
    soma += numero
}
console.log('Soma: ', soma)

// multiplicar array por 2
let numerosEmDobro = []

for (let numero of numeros) {
    numerosEmDobro.push(numero * 2);
}
console.log(numerosEmDobro)

//numeros maiores que 100
let numerosMaiores = []

for (let numero of numerosEmDobro) {
    if (numero > 100) {
        numerosMaiores.push(numero);
    }
}
console.log(numerosMaiores)

// busca em array
let pessoas = ['Caio', 'Marcos', 'Nicolas']

let pessoaLocalizada = '';

for (let pessoa of pessoas) {
    if (pessoa == 'Marcos') {
        pessoaLocalizada = (pessoa + " Localizado")
    }
}

console.log(pessoaLocalizada)