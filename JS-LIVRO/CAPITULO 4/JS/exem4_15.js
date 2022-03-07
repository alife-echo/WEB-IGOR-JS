var buttonFrut = document.getElementById('btnRepeat')
buttonFrut.addEventListener('click', function () {
  let inFruta = document.getElementById('inText_Frut')
  let fruta = inFruta.value
  let number = document.getElementById('inNumber')
  let number_Fruit = Number(number.value)
  let outResposta = document.getElementById('outList')
  let conc = ''
  for (let i = 1; i <= number_Fruit; i++) {
    /*if (i) {
      conc += fruta + '*'
    }*/
    if (i == number_Fruit) {
      conc += fruta
    } else {
      conc += fruta + '*'
    }
  }
  outResposta.textContent = conc + '.'
})
