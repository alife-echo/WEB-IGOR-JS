function criarAluno(nome, matricula, nota1, nota2) {
  return {
    nome: nome,
    matricula: matricula,
    nota1: nota1,
    nota2: nota2,
    media: function () {
      return (this.nota1 + this.nota2) / 2
    }
  }
}
var listaAlunos = [
  criarAluno('Álife', 20172291959, 10, 7),
  criarAluno('Juvenal', 20184491820, 7, 7)
]
var mostrar = listaAlunos.forEach(function (elemento) {
  document.body.innerHTML =
    `<h3> ${elemento.nome + '- Media : ' + elemento.media()}</h3>` +
    document.body.innerHTML
})
