let parcelas = Number(prompt('Quantas parcelas'))

let lista = ''

let dia, mes, ano, diaZero, mesZero

let data = new Date()

for (let i = 1; i <= parcelas; i++) {
  data.setMonth(data.getMonth() + 1)
  mes = data.getMonth() + 1
  dia = data.getDate()
  ano = data.getFullYear()

  diaZero = dia < 10 ? '0' + dia : dia
  mesZero = mes < 10 ? '0' + mes : mes

  lista += i + ' Parcela:' + diaZero + '/' + mesZero + '/' + ano + '\n'
}
alert(lista)
