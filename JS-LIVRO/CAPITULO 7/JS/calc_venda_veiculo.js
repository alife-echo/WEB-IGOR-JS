document.querySelector('.btn_Price').addEventListener('click', () => {
  let input_Car = document.querySelector('.input_Car')
  let input_Year = document.querySelector('.input_Year')
  let input_Price = document.querySelector('.price_Car')
  let outResult1 = document.querySelector('.car')
  let outResult2 = document.querySelector('.price_Sell')
  let car = input_Car.value
  let year = Number(input_Year.value)
  let price = Number(input_Price.value)

  if (car == '' || year == 0 || price == 0 || isNaN(year) || isNaN(price)) {
    alert('Informe os dados corretamente')
    input_Car.focus()
    location.reload()
    return
  }
  let classification = class_Year(year)
  let price_Sell = calc_Sell(classification, price)
  outResult1.textContent = car + ' - ' + classification
  outResult2.textContent = 'Preço de Venda R$:' + price_Sell.toFixed(2)
})
function class_Year(year) {
  let year_Now = new Date()
  let diference_Years = year_Now.getFullYear() - year
  if (diference_Years == 0) {
    return 'Novo'
  } else if (diference_Years <= 2) {
    return 'Seminovo'
  } else if (diference_Years > 2) {
    return 'Usado'
  }
}
function calc_Sell(year, price_Veichle) {
  if (year == 'Novo') {
    return price_Veichle * 0.08 + price_Veichle
  } else if (year == 'Seminovo' || year == 'Usado') {
    return price_Veichle * 0.1 + price_Veichle
  } else {
    return
  }
}
