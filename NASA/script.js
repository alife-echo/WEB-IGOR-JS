let url = 'https://auth.launchpad.nasa.gov/icam/api/lp/login.auid'

fetch(url).then(res => {
  console.log(res.json)
  return res.json()
})
/* .then(datas => {
  let dolar = datas.USDBRL.ask
  out.textContent =
    'Conversão de real para dolar:' +
    (value_Number / dolar).toFixed(2) +
    '$'
  /*    console.log('Valor de venda:', datas.USDBRL.ask)
  console.log('Valor de Compra:', datas.USDBRL.bid) 
}) */
