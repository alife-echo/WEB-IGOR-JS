/* const numberList = ['alife', 2, 3, 4] */

/* numberList.forEach((number, index, array) => {
  console.log({ array })
})
 */

/* function criarAluno(n, s, n1, n2) {
  return {
    nome: n,
    sobrenome: s,
    nota1: n1,
    nota2: n2,
    media: function (nota1, nota2) {
      return (this.nota1 + this.nota2) / 2
    }
  }
}

var lista = [
  criarAluno('Álife', 'Silva', 10, 9),
  criarAluno('Samanta', 'Rosa', 5, 4),
  criarAluno('Jurema', 'Costa', 7, 6)
]

lista.forEach(function (elemento) {
  console.log(
    'Nome : ' +
      elemento.nome +
      ', Nota 1 :' +
      elemento.nota1 +
      ', Nota 2 : ' +
      elemento.nota2 +
      ', Media: ' +
      elemento.media()
  )

  if (elemento.media() >= 7) {
    console.log('Aprovado')
  } else {
    console.log('Reprovado')
  }
})
 */

/* const usuariosLista = [
  { nome: 'Álife', credit: 500 },
  { nome: 'Lucas', credit: 600 },
  { nome: 'Romario', credit: 900 }
]

const novosUsuarios = usuariosLista.map(function (user, indice, array) {
 
  if (user.credit >= 800) {
    console.log(user, 'Novo Credito', user.credit * 2)
  } else {
    console.log(user, 'Novo Credito', user.credit + 100)
  }
}) 

 */

/* const usuariosListaNovo = [
  { nome: 'Álife', credit: 500 },
  { nome: 'Lucas', credit: 600 },
  { nome: 'Gabriela', credit: 900 },
  { nome: 'Reginaldo', credit: 1000 },
  { nome: 'Bernado', credit: 400 }
]

const filtro = usuariosListaNovo.filter(function (elemento, index, array) {
  console.log(elemento.nome, elemento.credit >= 700)
}) */

/* const numbersList = [4, 5, 7, 8, 2]
const orderedList = numbersList.sort((a, b) => {
  var mult = a * b
  
})
 */
/* 
const usersList = [
  { name: 'João', credit: 600 },
  { name: 'Maria', credit: 900 },
  { name: 'Carlos', credit: 300 },
  { name: 'Vanessa', credit: 200 }
]

var lista = usersList.find(function (user, index, array) {
  console.log(user.name === 'João')
}) */
/* const usersList = [
  { name: 'João', credit: 600 },
  { name: 'Maria', credit: 900 },
  { name: 'Carlos', credit: 300 },
  { name: 'Vanessa', credit: 200 }
]

var lista = usersList.every(function (user, index, array) {
  console.log(user.credit < 1000)
})
 */
/* const usersList = [
  { name: 'João', credit: 600 },
  { name: 'Maria', credit: 900 },
  { name: 'Carlos', credit: 300 },
  { name: 'Vanessa', credit: 200 }
]
var lista = usersList.sort(function (a, b) {
  console.log(a.credit * b.credit)
})
 */

/* const usersList = [
  { name: 'João', credit: 600 },
  { name: 'Maria', credit: 900 },
  { name: 'Carlos', credit: 300 },
  { name: 'Vanessa', credit: 200 }
]

const orderedUsers = usersList.sort(function (a, b) {
  console.log(a.name, b.credit)
})
 */
/* 
const usersList = [
  { name: 'João', credit: 600 },
  { name: 'Maria', credit: 900 },
  { name: 'Carlos', credit: 300 },
  { name: 'Vanessa', credit: 200 }
]

const orderedUsers = usersList.sort(a => console.log(a.name, a.credit))
 */
/* 
const numbersList = [1, 2, 3]
const total = numbersList.reduce((tudo, elementoAtual) => tudo + elementoAtual)
console.log(total) */

function produtos(name, price, categoria) {
  return {
    n: name,
    p: price,
    c: categoria
  }
}
const listaProdutos = [
  produtos('arroz', 5.4, 'D'),
  produtos('Refrigerante', 8, 'A')
]
var lista = listaProdutos.forEach(function ordemPrdutos(elemento) {
  console.log(elemento.p)
})

var mod = listaProdutos.map(function ordemPrdutos(elemento) {
  console.log(elemento.p * 2)
})
