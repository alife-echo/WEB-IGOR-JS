/*function media(n1, n2) {
  var nota1 = n1
  var nota2 = n2
  var media = (nota1 + nota2) / 2
   console.log(media) 
  return media
}
 var resultado1 = media(6, 7)
var resultado2 = media(9, 5)
console.log(resultado1 + ' É ' + resultado2) 

 for (i = 0; i <= 5; i++) {
  media()
}  

 */

function media(nota1, nota2, nota3, nota4) {
  let nota1 = parseFloat(prompt('Digite sua primeira nota ?'))
  let nota2 = parseFloat(prompt('Digite sua segunda nota ?'))

  let nota3 = parseFloat(prompt('Digite sua terceira nota ?'))
  let nota4 = parseFloat(prompt('Digite sua quarta nota ?'))
  let media = (nota1 + not2 + nota3 + nota4) / 4

  return alert('Sua media : ' + media)
}
alert(media())
