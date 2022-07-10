document.querySelector('.btn_Forms').addEventListener('click', () => {
  let input_Price = document.querySelector('.input_Price')
  let price = Number(input_Price.value)
  let outResult = document.querySelector('.price_Forms')
  let conc = ''
  for (let i = 1; i <= 12; i++) {
    conc += `${i}X de R$:${(price / i).toFixed(2)}<br/>`
  }
  outResult.innerHTML = conc
})
