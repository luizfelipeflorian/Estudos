import './style.css'
let idade = 12
let msg = ""

/* if (idade < 18) {
  msg = "Proibido acesso"
}else{
  msg = "Acesso liberado"
} */

msg = idade < 18 ? "proibido Acesso" : "Acesso Liberado"

// ternário

console.log(msg)