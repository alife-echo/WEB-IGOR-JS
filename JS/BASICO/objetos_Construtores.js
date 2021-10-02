/* function criarAluno(nome, n1, n2) {
  return {
    nome: nome  --> Maneira de criar aluno ,
    nota1: n1,
    nota2: n2,
    media: function () {
      return (this.nota1 + this.nota2) / 2
    }
  }
}

var turma = [
  criarAluno('Igor', 9, 6),
  criarAluno('Joao', 8, 5),
  criarAluno('silva', 3, 2)
]

console.log(turma[1].media()) */

/* turma.forEach(function (elemento) {
  console.log(elemento)
}) */

/* for (var lista of turma) {
  console.log(
    lista.nome +
      ' - ' +
      lista.nota1 +
      ' - ' +
      lista.nota2 +
      ' Media : ' +
      lista.media()
  )
}
 */

/*2 maneiro de criar uma função que criar um objeto construtor */

/* function aluno(nome, n1, n2) {
  this.nome = nome
  this.nota1 = n1
  this.nota2 = n2
  this.media = function media() {
    return (this.nota1 + this.nota2) / 2
  }
}

var a = [new aluno('Álife', 8, 9), new aluno('Moraes', 2, 9)]

console.log(a[1])
 */
