/* let alunoA = { nome: 'Igor', idade: 15 }

let alunoB = alunoA

alunoB.idade = 25 

let turmaA = ['Álife', 'Karla', 'Reginaldo']

let turmaB = turmaA

turmaB.push('Funk')

let alunosA = { nome: 'alife', idade: 15 }
let alunosB = alunosA
alunosB.nome = 'Reginaldo'
*/
// os dois recebem o mesmo endereço de memoria tanto objeto quanto array
// atribuição em arrays é objetos ocorre por referencia(e como se desse um novo apelido)

//Solução = COPIA
// COPIA EM ARRAY

let turmaA = ['Álife', 'Karla', 'Reginaldo']

/* let turmaB = turmaA.slice() */ // se não passar nada no argumento por padrão ele copia todos os elementos
// outra maneira
let turmaB = [...turmaA] // faz a copia do mesmo jeito do slice
turmaB.push('Funk')

let alunoA = { nome: 'Igor', idade: 15 }

/* let alunoB = Object.assign({}, alunoA) */ // maneira de copiar um objeto
let alunoB = { ...alunoA } // outra maneira de copiar um objeto
alunoB.idade = 25
