import './style.css'
import { contas } from "./db/dados";

//https://caiopinheiro.notion.site/

/* 
1. forEach
- Exiba no console uma frase para cada conta no formato:`"A conta [descricao] tem o valor de R$[valor]"`.
- Some todos os valores usando `forEach()` e exiba o total. 
*/

let soma = 0;

contas.forEach((conta) => {
    console.log(`A conta ${conta.descricao} tem o valor de R$ ${conta.valor}`);
    soma += conta.valor
})

console.log(`O valor total da conta é de R$ ${soma}`)

/*
2. map()
- Crie um novo array contendo apenas as descrições das contas.
- Crie um novo array com os valores acrescidos de 10% (simulando juros).
- Gere um array de strings no formato: `"Descrição: [descricao] - Pago: [pago]"`. 
*/

let contasDesc = contas.map((conta) => {
    return conta.descricao
})
console.log(contasDesc)

let contasJuro = contas.map((conta) => {
    return conta.valor * 1.10
})
console.log(contasJuro)

let contasArray = contas.map((conta) => {
    return `Descrição ${conta.descricao} - Pago: ${conta.pago ? "Sim" : "Não"}`
})
console.log(contasArray)

/* 
3. filter()
- Liste apenas as contas que já foram pagas.
- Liste apenas as contas com valor acima de R$ 500.
- Liste as contas **não pagas** e com valor acima de R$ 300. 
*/

let contasPagas = contas.filter((conta) => {
    return (conta.pago)
})
console.log(contasPagas)

let contasAcimaDe500 = contas.filter((conta) => {
    return (conta.valor > 500)
})
console.log(contasAcimaDe500)

let contasNaoPagasAcimaDe500 = contas.filter((conta) => {
    return (conta.valor > 500) && (!conta.pago)
})
console.log(contasNaoPagasAcimaDe500)

/* 
4. reduce()

- Calcule o valor total de todas as contas.
- Calcule o valor total apenas das contas pagas.
- Calcule o valor total apenas das contas não pagas.
*/

let total = contas.reduce((ac, despesa) => {
    return (ac += despesa.valor)
}, 0)
console.log(total)

let totalPagas = contas.reduce((ac, despesa) => {
    return (despesa.pago ? (ac += despesa.valor) : (ac + 0))
}, 0)
console.log(totalPagas)

let totalNaoPagas = contas.reduce((ac, despesa) => {
    return (!despesa.pago ? (ac += despesa.valor) : (ac + 0))
}, 0)
console.log(totalNaoPagas)

/* 
5. some()

- Verifique se existe alguma conta não paga.
- Verifique se existe alguma conta com valor acima de R$ 1000.
*/



/* 
6. every()

- Verifique se todas as contas já foram pagas.
- Verifique se todas as contas têm valor acima de R$ 50.
*/