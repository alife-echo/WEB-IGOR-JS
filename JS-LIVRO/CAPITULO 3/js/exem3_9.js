function calcValorDeposito() {
  let inputValor = document.getElementById('inValor')
  let outTempo = document.getElementById('outTempo')
  let outValor = document.getElementById('outTroco')
  let tempo = ''
  let valor = Number(inputValor.value)

  if (valor == 1.0 || valor < 1.75) {
    let guardar = valor - 1
    outValor.innerHTML = '<h1> seu troco :' + guardar.toFixed(2) + '</h2>'
    tempo = 30
    outTempo.innerHTML = '<h1> tempo : ' + tempo + 'minutos</h1>'
  } else if (valor == 1.75 || valor < 3) {
    let guardar = valor - 1.75
    outValor.innerHTML = '<h1> seu troco :' + guardar.toFixed(2) + '</h2>'
    tempo = 60
    outTempo.innerHTML = '<h1> tempo : ' + tempo + 'minutos</h1>'
  } else if (valor == 3.0 || valor > 3.0) {
    let guardar = valor - 3.0
    outValor.innerHTML = '<h1> seu troco :' + guardar.toFixed(2) + '</h2>'
    tempo = 120
    outTempo.innerHTML = '<h1> tempo : ' + tempo + 'minutos</h1>'
  }
  if (valor < 1.0) {
    outTempo.innerHTML = '<h1> Tempo insuficiente </h1>'
    outValor.innerHTML = '<h1> Valor insuficiente</h2>'
  }
  if (isNaN(valor)) {
    alert('Digite um numero valido')
  }
}

let button = document.getElementById('btnDeposito')
button.addEventListener('click', calcValorDeposito)
