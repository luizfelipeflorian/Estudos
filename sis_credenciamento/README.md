# No terminal, faça:

- 1° cd sis_credenciamento
- 2° npm i
- 3° npm run dev

# Anotação:

## te vira para implementar isso no JS ae mané

let data = Date.now()

let dataFormatada = new Intl.DateTimeFormat('pt-BR',{
  timeZone:'America/Campo_Grande',
  day:'numeric',
  month:'long',
  year:'numeric',
  hour:'numeric',
  minute:'numeric',
  second:'numeric'
}).format(data)


document.querySelector('h2').textContent = dataFormatada