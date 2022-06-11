const RATE_FORFEIT = 2 / 100
const RATE_FEES = 0.33 / 100
const TIME_MILLISECONDS_DAY = 24 * 60 * 60 * 1000
document.querySelector('button.btn_Calculet').addEventListener('click', () => {
  let in_Date = document.querySelector('.date')
  let in_Value_Account = document.querySelector('.in_Value_Account')
  let in_Value_Forfeit = document.querySelector('.value_Forfeit')
  let in_Value_Fees = document.querySelector('.value_Fees')
  let in_Value_All_Pay = document.querySelector('.all_Pay')

  let due_Date = in_Date.value
  let value = Number(in_Value_Account.value)
  if (due_Date == '' || value == 0 || isNaN(value)) {
    alert('Informe corretamente os dados da conta..')
    in_Date.focus()
    return
  }
  let today = new Date()
  let vencto = new Date()

  let slices = due_Date.split('-')
  vencto.setDate(Number(slices[2]))
  vencto.setMonth(Number(slices[1]) - 1)
  vencto.setFullYear(Number(slices[0]))

  let delay = today - vencto

  let forfeit = 0
  let fees = 0

  if (delay > 0) {
    let days = Math.round(delay / TIME_MILLISECONDS_DAY)
    forfeit = value * RATE_FORFEIT
    fees = value * RATE_FEES * days
  }
  let sum = value + forfeit + fees
  in_Value_Forfeit.value = forfeit.toFixed(2)
  in_Value_Fees.value = fees.toFixed(2)
  in_Value_All_Pay.value = sum.toFixed(2)
})

document
  .querySelector('button.btn_New_Account')
  .addEventListener('click', () => {
    location.reload()
  })
