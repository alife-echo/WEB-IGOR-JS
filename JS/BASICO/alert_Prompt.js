//alert('Bom dia, Igor')

/* var numero = parseFloat(prompt('Digite um numero ?'))
var dobro = numero + numero
alert('O dobro de ' + numero + ' é ' + dobro) */

var nota1 = parseFloat(prompt('Digite a nota do 1-bi'))
var nota2 = parseFloat(prompt('Digite a nota do 2-bi'))
var nota3 = parseFloat(prompt('Digite a nota do 3-bi'))
var nota4 = parseFloat(prompt('Digite a nota do 4-bi'))
var media = (nota1 + nota2 + nota3 + nota4) / 4
var passou = media >= 7
var reprovou = !passou

alert(
  'Sua media é : ' + media + ' Passou : ' + passou + ' Reprovou ' + reprovou
)
