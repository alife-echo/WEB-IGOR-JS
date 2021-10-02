/* var objetos = [
  {
    nome: 'alife',
    idade: 16,
    sexo: 'm'
  },
  {
    nome: 'silva',
    idade: 18,
    sexo: 'm'
  },
  {
    nome: 'moraes',
    idade: 14,
    sexo: 'm'
  }
]

for (var valores of objetos) {
  console.table(valores)
}
 */

/* var aluno = { nome: 'igor', nota: 7.5 }

console.log(aluno) */

function media() {
  return (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) / 4
}
function analise() {
  return (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) / 4 >=
    7
    ? 'Passou'
    : 'Reprovou'
}

var alunos = {
  nome: 'Álife Silva De Moraes',
  notas: [7, 7, 7, 9],
  medias: media,
  conceitos: analise
}

console.log(alunos.nome)
console.log(alunos.medias())
console.log(alunos.conceitos())
