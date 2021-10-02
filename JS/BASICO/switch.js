/* var nota1 = 9.0
var nota2 = 8

var media = (nota1 + nota2) / 2

var conceito = ''

if (media >= 8) {
  conceito = 'Ótimo'
} else if (media >= 6.5) {
  conceito = 'Bom'
} else {
  conceito = 'Regular'
}

console.log(conceito)
console.log(media)

switch (conceito) {
  case 'Ótimo':
    console.log('Parabéns, vc é um ótimo aluno')
    break
  case 'Bom':
    console.log('Você está quase perfeito')
    break
  case 'Regular':
    console.log('Estude mais um pouco')
    break
  default:
    console.log('Houve alguem erro')
    break
} */

/* switch (new Date().getDay()) {
  case 0:
    day = 'Domingo'
    console.log(day)
    break
  case 1:
    day = 'Segunda'
    console.log(day)
    break
  case 2:
    day = 'Terça'
    console.log(day)
    break
  case 3:
    day = 'Quarta'
    console.log(day)
    break
  case 4:
    day = 'Quinta'
    console.log(day)
    break
  case 5:
    day = 'Sexta'
    console.log(day)
    break
  case 6:
    day = 'Sabado'
    console.log(day)
}
 */

/* Exercicios */

/* var valor1 = parseFloat(prompt(' Digite o primeiro valor'))
var valor2 = parseFloat(prompt(' Digite o valor segundo valor'))

var comandos = parseInt(
  prompt(
    'Digite o numero para efetuar : 1-SOMA , 2-SUBTRAÇÃO , 3-DIVISÃO , 4-Multiplicação '
  )
)

switch (comandos) {
  case 1:
    var soma = valor1 + valor2
    alert('Somatoria dos dois valores é igual a : ' + soma)
    break
  case 2:
    var subtracao = valor1 - valor2
    alert('Subração dos dois valores é igual a : ' + subtracao)
    break
  case 3:
    var divisao = valor1 / valor2
    alert('Divisão dos dois valores é igual a : ' + divisao)
    break

  case 4:
    var multiplicacao = valor1 * valor2
    alert('Multiplicação dos dois valores é igual a : ' + multiplicacao)
    break

  default:
    alert('ERROR CONTATE A ADMINISTRAÇÃO')
}
 */
/* var valor = parseFloat(prompt('Digite o valor gasto'))
var codigo = parseInt(prompt('Digite : 1-Pessoa Comum, 2-Funcionario, 3-Vip'))

switch (codigo) {
  case 1:
    alert('Valor que você tem que pagar : ' + valor)
    break
  case 2:
    var calculo = valor - valor * 0.1
    alert('Valor que você tem que pagar : ' + calculo)
    break
  case 3:
    var calculoVip = valor - 0.05 * valor
    alert('Valor que você tem que pagar : ' + calculoVip)
    break

  default:
    alert('Error contate a admnistração ')
} */
