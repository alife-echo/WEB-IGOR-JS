class Conta {
  constructor(numero, titular, saldo = 0, limite) {
    this.numero = numero
    this.titular = titular
    this.saldo = saldo
    this.limite = limite
  }
}
function depositar(valor) {
  this.saldo += valor
}

function saca(valor) {
  if (this.saldo >= valor) {
    this.saca -= valor
    return true
  } else {
    return false
  }
}

let conta1 = new Conta(1000, 'Álife', 200, 1000)
let conta2 = new Conta(500, 'Lorraine', 300, 1000)
let conta3 = new Conta(300, 'Leia', 500, 1000)
let contas = [conta1, conta2, conta3]
let list = ''
for (let i = 0; i < contas.length; i++) {
  list +=
    `Conta:${conta1.numero} Titular:${conta1.titular} Saldo:${conta1.saldo}R$ Limite:${conta1.limite}R$ ` +
    '<br/>'
}

document.querySelector('#outList').innerHTML = list
