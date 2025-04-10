let btn = document.querySelector('button');
let inputprecoproduto = document.querySelector('#precoproduto')
let divoriginal = document.querySelector('#original')
let divdesconto = document.querySelector('#desconto')
let spaneconomia = document.querySelector('#economia')
let divparcelado = document.querySelector('#parcelado')
let spantotalparcelado = document.querySelector('#totalparcelado')

function exibircalc() {
    divoriginal.textContent = ("R$ " + inputprecoproduto.value);
    divdesconto.textContent = ("R$ " + (inputprecoproduto.value * 0.9).toFixed(2));
    spaneconomia.textContent = ("R$ " + (inputprecoproduto.value - (inputprecoproduto.value * 0.9)).toFixed(2));
    divparcelado.textContent = ("R$ " + (inputprecoproduto.value / 3).toFixed(2));
    spantotalparcelado.textContent = ("R$ " + inputprecoproduto.value);
}

btn.onclick = exibircalc;