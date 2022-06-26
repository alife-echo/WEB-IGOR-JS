document.querySelector('.btn_Calc').addEventListener('click', () => {
  let in_Date = document.querySelector('.input_Date')
  let in_Forfeit = document.querySelector('.input_Forfeit')
  let number_Forfeit = Number(in_Forfeit.value)
  let out_One = document.querySelector('.out_Result')
  let out_Two = document.querySelector('.out_Result_two')
  let date = in_Date.value
  out_Two.textContent =
    'Valor Com Desconto: R$' +
    (number_Forfeit - number_Forfeit * 0.2).toFixed(2)

  let deadLine = new Date()
  let slices = date.split('-')
  deadLine.setDate(Number(slices[2]))
  deadLine.setMonth(Number(slices[1]) - 1)
  deadLine.setFullYear(Number(slices[0]))
  deadLine.setDate(deadLine.getDate() + 90)
  day_date = deadLine.getDate()
  month_date = deadLine.getMonth() + 1
  year_date = deadLine.getFullYear()
  let day_Format = day_date < 10 ? '0' + day_date : day_date
  let month_Format = month_date < 10 ? '0' + month_date : month_date
  let year_Format = year_date < 10 ? '0' + year_date : year_date
  out_One.textContent =
    'Data limite para pagamento com desconto:' +
    day_Format +
    '/' +
    month_Format +
    '/' +
    year_Format
})
