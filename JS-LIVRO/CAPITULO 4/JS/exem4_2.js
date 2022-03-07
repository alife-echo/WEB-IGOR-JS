function descrescerNumero() {
  var inputNumero = document.getElementById('input_Number')
  var outResposta = document.getElementById('outResposta')
  var numero = Number(inputNumero.value)
  var resposta = 'Entre' + numero + 'e 1 :'
  for (var i = numero; i > 0; i--) {
    resposta = resposta + i + ','
  }
  resposta = resposta + i + '.'
  outResposta.textContent = resposta
}
var button = document.getElementById('btnMostrar')
button.addEventListener('click', descrescerNumero)
