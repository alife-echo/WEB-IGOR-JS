function novoAluno(nome, idade) {
  return { nome, idade }
}

let alunos = [
  novoAluno('Álife', 23),
  novoAluno('José', 45),
  novoAluno('Marcia', 29),
  novoAluno('João', 35)
]

function idadeTurma(total, aluno) {
  return total + aluno.idade
}
/* let total = alunos.reduce(
  (total, current_Element) => total + current_Element.idade,
  0
)
 */
// vai somar todos os elementos do array aparti de zero
console.log(alunos.reduce(idadeTurma, 0))
