let filmes = ['Vingadores Ultimato', 'Guerra dos mundos', 'Jurassic Park']
let numeros = [10, 23, 59, 33, 89]

filmes.forEach(function(filme){
    console.log(filme);
})

let numerosDobrados = numeros.map(function (numero) {
    return numero*2
})
console.log(numerosDobrados)

let numerosMaioresQue100 = numerosDobrados.filter(function (numero) {
    return (numero > 100)
})

console.log(numerosMaioresQue100)