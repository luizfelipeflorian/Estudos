export type Conta = {
    descricao : string,
    valor : number,
    pago : boolean,
    id : number
}

export const contas = [
  {
    id:100, //sempre que usar o map par retornr um elemento ele deve ter uma key
    descricao: "Aluguel",
    valor: 1200.00,
    pago: true
  },
  {
    id:101,
    descricao: "Conta de luz",
    valor: 250.75,
    pago: false
  },
  {
    id:102,
    descricao: "Internet",
    valor: 99.90,
    pago: true
  },
  {
    id:103,
    descricao: "Supermercado",
    valor: 480.30,
    pago: false
  },
  {
    id:104,
    descricao: "Plano de saúde",
    valor: 320.00,
    pago: true
  },
  {
    id:105,
    descricao: "Gasolina",
    valor: 350.00,
    pago: false
  },
  {
    id:106,
    descricao: "Academia",
    valor: 89.90,
    pago: true
  },
  {
    id:107,
    descricao: "Streaming (Netflix)",
    valor: 39.90,
    pago: true
  },
  {
    id:108,
    descricao: "Manutenção do carro",
    valor: 780.00,
    pago: false
  },
  {
    id:109,
    descricao: "Farmácia",
    valor: 120.45,
    pago: true
  },
  {
    id:110,
    descricao: "Escola das crianças",
    valor: 950.00,
    pago: false
  }
];