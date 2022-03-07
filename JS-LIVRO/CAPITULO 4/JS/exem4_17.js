var button_Prev = document.getElementById('btnPrevisao')
let valor = 1
button_Prev.addEventListener('click', function () {
  let inChinchilas = document.getElementById('inNumber_Chinchila')
  let inAnos = document.getElementById('inNumber_Years')
  let chinChilas = Number(inChinchilas.value)
  let anos = Number(inAnos.value)
  let outResposta = document.getElementById('outList')
  var conc = ''
  var sc = ''

  for (let i = 1; i <= anos; i++) {
    /*  conc += `${i}-ano: ${chinChilas * 3} <br>`  */
    if (i == 1) {
      conc += i + '-ano' + chinChilas + 'Chinchilas'
    } else if (i > 1) {
      conc += i + '-ano' + chinChilas + 'Chinchilas'
    }
    chinChilas *= 3
  }
  outResposta.innerHTML = conc
})
