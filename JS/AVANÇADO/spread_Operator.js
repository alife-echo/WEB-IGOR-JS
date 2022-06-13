/* let pessoa = {
  name: 'José da silva',
  idade: 32
}

let contato = {
  telefone: 8765432,
  email: 'jose@gmail.com'
}

let copia = { ...pessoa, cidade: 'Rio de janeiro', ...contato }
copia.idade = 88
console.log(pessoa)
console.log(copia)
 */

let notas_turma1 = [10, 8, 4, 3]

let notas_turma2 = [5, 4, 2, 1.5]

let todas_notas = [...notas_turma1, ...notas_turma2]

console.log(todas_notas)
