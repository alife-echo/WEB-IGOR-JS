/* Nome do aluno  - nota 1 - nota 2 - media - aprovado ou reprovado */

/* var nomes = ['Álife', 'José', 'Maria']
var notasA = [8, 5, 6]
var notasB = [6, 6, 4]

function media(nota1, nota2) {
  return (nota1 + nota2) / 2
}
function passou(media) {
  if (media >= 7) {
    return 'Aprovado'
  } else {
    return 'Reprovado'
  }
}
for (var indice in nomes) {
  var notas1 = notasA[indice]
  var notas2 = notasB[indice]
  var newNomes = nomes[indice]
  var m = media(notas1, notas2)
  console.log(newNomes + ' - ' + notas1 + ' - ' + notas2 + ' - ' + passou(m))
}
 */

var repeticao = parseInt(
  prompt('Digite o numero de alunos que serão cadastrados : ')
)

for (var i = 0; i <= repeticao; i++) {
  var alunos = prompt('Digite o nome do aluno:' + i)
  var nota1 = parseFloat(prompt('Digite a nota do aluno:' + i))
  var nota2 = parseFloat(prompt('Digite a segunda nota do aluno:' + i))
  alert(alunos[i], nota1[i], nota2[i])
}
