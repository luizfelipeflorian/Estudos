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

filmes.forEach(function (filme) {
    console.log(filme);
})

let numerosDobrados = numeros.map(function (numero) {
    return numero * 2
})
console.log(numerosDobrados)

let numerosMaioresQue100 = numerosDobrados.filter(function (numero) {
    return (numero > 100)
})

console.log(numerosMaioresQue100)

//função de flecha
filmes.forEach((filme) => {
    console.log(filme)
})

filmes.forEach(filme => console.log(filme))

const despesasDomesticas = [
  {
    descricao: "Conta de luz",
    valor: 230.50,
    categoria: "Energia",
    data: "2025-08-10",
    pago: true
  },
  {
    descricao: "Conta de água",
    valor: 120.75,
    categoria: "Água",
    data: "2025-08-12",
    pago: false
  },
  {
    descricao: "Supermercado",
    valor: 560.00,
    categoria: "Alimentação",
    data: "2025-08-15",
    pago: true
  },
  {
    descricao: "Internet",
    valor: 99.90,
    categoria: "Comunicação",
    data: "2025-08-18",
    pago: false
  }
];

// usando o reduce para somar os valotes
let totalDespesas = despesasDomesticas.reduce((ac, despesa) => {
  return ac + despesa.valor
}, 0)

console.log(totalDespesas)

// usando o reduce e o filter para um tipo de "somase"
let totalDespesasNaoPagas = despesasDomesticas.filter((despesa) => {
  return despesa.pago == false
}).reduce((ac, despesa) => {
  return ac + despesa.valor
}, 0)
console.log('Despesas Não Pagas:', totalDespesasNaoPagas)

let temperaturasF = [32, 50, 100, 60]

let temperaturasC = temperaturasF.map((grau) => {
  return (grau - 32) * 5 / 9
})

console.log(temperaturasC)

//retornando uma cópia do objeto com o spread
let despesasComDesconto =
  despesasDomesticas.map((despesa) => {
    return {
      ...despesa,
      totalComDesconto: despesa.valor * 0.95
    }
  })

console.log('Despesa com desconto', despesasComDesconto)

// ensinando a usar o spread
let frutas = ['Maçã', 'Laranja', 'Uva']
let legumes = ['Beterraba', 'Alface', 'Pepino']

let alimentos = [...frutas, ...legumes]

console.log(alimentos)

// ensinandoa usar o spread com objetos
let entereco = {
  rua: 'x',
  cep: '123456'
}

let pessoa = {
  nome: 'Luiz',
  idade: '20',
  ...entereco
}
console.log(pessoa)

//trabalhando com objetos e banco de dados
import { clientes, produtos } from "./db/dados";

const ulClientes = document.querySelector('#clientes')

let clientesMap = clientes.map((cliente) => {

    let status = cliente.ativo ? "badge badge-soft badge-success" : "badge badge-soft badge-error"; //verifica o status e customisa a class do label para uma etiqueta

    return `<li>${cliente.nome} - ${cliente.email} - <label class="${status}">${cliente.ativo}</label></li>`
})

clientesMap.forEach((li) => {
    ulClientes.innerHTML += li
})

//apenas um corresponde
let numbers = [1, -2, 10, 8]

let valorMenorQueZero = numbers.some((numero) => {
    return numero < 0
})

console.log(valorMenorQueZero)

//todos correspondem
let nomes = ['Caio', 'Marcos', 'Felipe']

let comMaisdeTresCaracteres = nomes.every((nome) => {
    return nome.length > 3
})

console.log(comMaisdeTresCaracteres)