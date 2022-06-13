function new_Student(nome, idade) {
  return { nome, idade }
}

let students = [
  new_Student('Mario', 23),
  new_Student('José', 45),
  new_Student('Marcia', 29),
  new_Student('João', 35)
]

let player = [
  new_Student('reginado', 23),
  new_Student('lidia', 45),
  new_Student('miriam', 29),
  new_Student('mateus', 35)
]
order_List = array => {
  let manipulation = array.filter(user => {
    return user.idade < 30
  })
  return manipulation
}
console.log(order_List(player))
console.log(order_List(students))
/* console.log(students) */
