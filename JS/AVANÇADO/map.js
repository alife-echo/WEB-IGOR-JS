function students_Elements(student, point1, point2, age) {
  return { student, point1, point2, age }
}
let class1 = [
  students_Elements('Álife', 3.4, 9.2, 9),
  students_Elements('Reginaldo', 9, 7, 7),
  students_Elements('William', 3, 5, 6),
  students_Elements('Regis', 7, 7.5, 8)
]

filter = filters => {
  let running = filters.forEach(element => {
    return element.point1
  })

  /*  let concept = filters.filter(user => {
    if (mean >= 7) {
      return user.student
    }
  })
  return concept */
  return running
}

console.log(filter(class1))
