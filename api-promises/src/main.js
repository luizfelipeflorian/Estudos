import './style.css'
const inputCep = document.querySelector('#cep');
const inputLogradouro = document.querySelector('#logradouro');
const inputBairro = document.querySelector('#bairro');
const inputCidade = document.querySelector('#cidade');

inputCep.addEventListener('focusout', function (event) {
    let cep = event.target.value //target é o campo input de cpf, event fou disparado por lá então pode-se pegar o valor
    buscarEndereco(cep)
})

function preecherCampos(dados) { //prenche os campos de logradouro, bairro, cidade conforme o CEP
    inputLogradouro.value = dados.logradouro
    inputBairro.value = dados.bairro
    inputCidade.value = dados.localidade
}

function buscarEndereco(cep) { //busca as informaçoes do CEP em uma API

    let responsePromice = fetch(`https://viacep.com.br/ws/${cep}/json/`)

    responsePromice.then(function (response) {
        let dadosPromice = response.json()
        dadosPromice.then(function (dados) {
            preecherCampos(dados)
        });
    });
}

