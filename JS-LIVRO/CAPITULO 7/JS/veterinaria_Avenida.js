function swiperRadio() {
  let section = document.querySelector('#in_Convenios')

  if (ratioYes.checked) {
    section.className = 'exibe'
  } else if (ratioNo.checked) {
    section.className = 'oculta'
  }
}
function discont() {
  let in_Value_Discont = document.querySelector('.in_Value_vaccine')
  let discont = Number(in_Value_Discont.value)
  let outResponses_One = document.querySelector('.outDiscount')
  let outResponses_Two = document.querySelector('.outPay')
  if (discont == 0 || discont == '') {
    alert('Insira os dados corretamente')
    location.reload()
    in_Value_Discont.focus()
  }
  let rates = rate()
  let calc = calcDiscont(discont, rates)
  outResponses_One.textContent = 'Desconto:' + calc.y + 'R$'
  outResponses_Two.textContent = 'Valor:' + calc.x + 'R$'
}
function rate() {
  let responses = document.querySelector('#in_Convenios')
  if (ratioYes.checked) {
    let num = responses.selectedIndex

    if (num == 0) {
      // saude animal

      return 0.5
    } else if (num == 1) {
      //amigo dos animais

      return 0.2
    }
  } else {
    return 0.1
  }
}
function calcDiscont(discont, rate) {
  return { x: discont - discont * rate, y: discont * rate }
}
function event_Kepress(key_event) {
  if (key_event.keyCode == 13) {
    discont()
  }
}
let key_discont = document.querySelector('.in_Value_vaccine')
key_discont.addEventListener('keypress', event_Kepress)
let btn_Discont = document.querySelector('.btn_Discont')
btn_Discont.addEventListener('click', discont)
let ratioYes = document.querySelector('#rbYes')
ratioYes.addEventListener('change', swiperRadio)
let ratioNo = document.querySelector('#rbNo')
ratioNo.addEventListener('change', swiperRadio)
