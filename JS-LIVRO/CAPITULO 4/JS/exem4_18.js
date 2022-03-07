let button = document.querySelector('#btnVerificar')

button.addEventListener('click', function () {
  let inputNumber = document.querySelector('#inNumber_perfect')
  let number = Number(inputNumber.value)
  let outList = document.querySelector('#outList')
  let valor = 0
  let conc = ''
  let mostrar = ''
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      valor += i
      conc += i + ','
    }
    if (valor == number) {
      mostrar = conc + 'and,' + valor
    } else {
      mostrar = 'Não é perfeito'
    }
  }
  outList.textContent = mostrar
})
