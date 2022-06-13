let aluno = {
  matricula: 1234,
  nome: 'Marcos',
  telefone: 94992443989,
  cidade: 'Barra do piraí'
}
let aluno1 = {
  matricula: 4321,
  nome: 'Álife',
  telefone: 9499103085,
  cidade: 'Marginga'
}

let alunos = [aluno, aluno1]
let [Marcos, Álife] = alunos
console.log(Marcos)
console.log(Álife)
console.log(alunos)

/* let { nome, ...resto } = aluno
resto.cidade = 'Marabá'
console.log(aluno)
console.log(nome)
console.log(resto) */
