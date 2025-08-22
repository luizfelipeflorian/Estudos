import { clientes, produtos } from "./db/dados";
import './style.css'

const ulClientes = document.querySelector('#clientes')

let clientesMap = clientes.map((cliente) => {

    let status = cliente.ativo ? "badge badge-soft badge-success" : "badge badge-soft badge-error"; //verifica o status e customisa a class do label para uma etiqueta

    return `<li>${cliente.nome} - ${cliente.email} - <label class="${status}">${cliente.ativo}</label></li>`
})

clientesMap.forEach((li) => {
    ulClientes.innerHTML += li
})