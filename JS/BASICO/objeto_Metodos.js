function calcMedia() {
  return (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) / 4
}

var aluno = {
  nome: 'Álife',
  notas: [3, 8, 9, 4],
  media: calcMedia
}
var aluno1 = {
  nome: 'João',
  notas: [2, 4, 7, 7],
  media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())
