function calcular_Media() {
  if (arguments.length == 0) {
    alert('Informe as notas por favor')
  }
  //arguments = funcionar como um vetor, contem uma lista de valores que foram passados na função
  let soma = 0
  let num_Notas = arguments.length
  for (let i = 0; i < num_Notas; i++) {
    soma += arguments[i] // percorre os argumentos
  }
  let media = (soma / num_Notas).toFixed(1)
  alert('Media:' + media)
}
calcular_Media(3, 4, 5, 6)
