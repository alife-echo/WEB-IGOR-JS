//API = INTERFACE ENTRE 2 SISTEMAS
/* key == Label
bid == Compra
ask == Venda
varBid == Variação
pctChange == Porcentagem de Variação
high == Máximo
low == Mínimo */
let url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
// fetch serve pra eu pegar um url
// fetch retorna uma promise
// preciso transformar essa promise em json
// depois eu preciso de outro then pra mostrar o json
/* fetch(url)
  .then(res => {
    return res.json()
  })
  .then(datas => {
    console.log('Valor de venda:', datas.USDBRL.ask)
    console.log('Valor de Compra:', datas.USDBRL.bid)
  }) */

let button = document.querySelector('.input_submit')
button.addEventListener('click', () => {
  let in_Value = document.querySelector('#valor')
  let value_Number = Number(in_Value.value)
  let out = document.querySelector('p')
  fetch(url)
    .then(res => {
      return res.json()
    })
    .then(datas => {
      let dolar = datas.USDBRL.ask
      out.textContent =
        'Conversão de real para dolar:' +
        (value_Number / dolar).toFixed(2) +
        '$'
      /*    console.log('Valor de venda:', datas.USDBRL.ask)
      console.log('Valor de Compra:', datas.USDBRL.bid) */
    })
})
