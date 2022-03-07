function mostrarTabuada() {
  var inputNumero = document.getElementById('input_Number')
  var outResposta = document.getElementById('outResposta')
  var numero = Number(inputNumero.value)
  var resposta = ''
  if (numero == 0 || isNaN(numero)) {
    alert('informe um numero valido')
    numero.focus()
    return
  }
  for (var i = 1; i <= 10; i++) {
    resposta += numero + 'x' + i + '=' + numero * i + '\n'
  }
  outResposta.textContent = resposta
}

var button = document.getElementById('btnMostrar')
button.addEventListener('click', mostrarTabuada)
