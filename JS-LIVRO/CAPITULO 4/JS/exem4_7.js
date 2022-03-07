let btnEstrelas = document.getElementById('btnCalcular')
btnEstrelas.addEventListener('click', function () {
  let inEstrelas = document.getElementById('inValor')
  let entradaEstrelas = Number(inEstrelas.value)
  let outEstrelas = document.getElementById('outStar')
  let conc = ''
  if (entradaEstrelas == '' || isNaN(entradaEstrelas)) {
    alert('Insira numeros validos')
    inEstrelas.focus()
    return
  }
  for (let i = 1; i <= entradaEstrelas; i++) {
    if (i % 2 == 0) {
      conc = conc + '*'
    } else {
      conc = conc + '-'
    }
  }
  outEstrelas.textContent = conc
})
