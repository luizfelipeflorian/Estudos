import './style.css'

//tutorial para instalar os icones do lucide
//https://lucide.dev/guide/packages/lucide
import { Coins, createIcons, Dices, Layers } from 'lucide'
import { comprarCarta, criarBaralho } from "./api/deck-of-cards";

createIcons({
    icons: {
        Dices,
        Layers, Coins
    }
})

const btnNovoBaralho = document.querySelector('#btnNovoBaralho');
const btnResetarMesa = document.querySelector('#btnResetarMesa');
const baralhoId = document.querySelector('#baralhoId');
const cartasRestantes = document.querySelector('#cartasRestantes');
const mesaBaralho = document.querySelector('#mesaBaralho');
const mesaCartas = document.querySelector('#mesaCartas');

btnNovoBaralho.addEventListener('click', async function (event) {
    //fazer um verificador para ver se já existe algum baralho no local storage para dai utilizá-lo ao invés de criar outro//

    const baralho = await criarBaralho();
    console.log(baralho);
    localStorage.setItem('baralhoID', baralho.deck_id);
    const btn = event.target;
    btn.setAttribute('disabled', true)
    baralhoId.textContent = baralho.deck_id;
    cartasRestantes.textContent = baralho.remaining;
})

mesaBaralho.addEventListener('click', async function () {
    const cartasCompradas = await comprarCarta(localStorage.getItem('baralhoID'));
    console.log(cartasCompradas)
    cartasRestantes.textContent = cartasCompradas.remaining;

})

btnResetarMesa.addEventListener('click', async function () {
    baralhoId.textContent = "-";
    cartasRestantes.textContent = '0';
    btnNovoBaralho.removeAttribute('disabled');
})
