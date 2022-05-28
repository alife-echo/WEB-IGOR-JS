let btn_Calc = document.querySelector('#btn_Calculate')
btn_Calc.addEventListener('click', calculate_Integrals)
function dobrar(x) {
  return x * x
}
function calculate_Integrals() {
  let in_Intervals = document.querySelector('#in_sub_Intervals')
  let in_Limit_First = document.querySelector('#in_First_Limit')
  let in_Limit_Last = document.querySelector('#in_Last_Limit')
  let sub_Inteval = parseInt(in_Intervals.value)
  let limit_First = parseFloat(in_Limit_First.value)
  let limit_Last = parseFloat(in_Limit_Last.value)
  let out_Integral = document.querySelector('#out_Result_Integral')
  let s = 0
  let res

  let x = Math.abs(limit_Last - limit_First) / sub_Inteval
  for (let i = 1; i < sub_Inteval; i++) {
    res = limit_First + i * x
    s = s + dobrar(res)
  }
  let integral_Calc =
    (x / 2) * (dobrar(limit_First) + dobrar(limit_Last) + 2 * s)
  out_Integral.textContent = integral_Calc.toFixed(2)
}
