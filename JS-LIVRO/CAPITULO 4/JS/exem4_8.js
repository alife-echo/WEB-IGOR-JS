function verificarPrimo() {
  var numero = document.getElementById('inNumero')
  var outResposta = document.getElementsByClassName('outResultado')[0]

  var num = Number(numero.value)

  if (num == '' || isNaN(num)) {
    alert('Informe os dados corretamente')
    return
    numero.focus()
  }
  /*
  var numDivisores = 0

  for (var i = 1; i <= num; i++) {
    // percorre o valor digitado pelo usuario

    if (num % i == 0) {
      // se o numero digita pelo usuario der resto zero
      numDivisores++ //  autosoma quantos divisores tem esses numeros, ate o for ser satisfeito
    }
  } //se possui apenas dois divisores executa o que tem em baixo
  if (numDivisores == 2) {
    outResposta.textContent = num + ' é primo'
  } else {
    outResposta.textContent = num + ' não é primo'
  }
  */

  var temDivisor = 0

  for (var i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      temDivisor = 1
      break
    }
  }
  if (num > 1 && !temDivisor) {
    outResposta.textContent = num + ' É primo'
  } else {
    outResposta.textContent = num + ' Não é primo'
  }
}
var button = document.getElementById('btnVerificar')
button.addEventListener('click', verificarPrimo)
