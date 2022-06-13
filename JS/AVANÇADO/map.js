function students_Elements(student, mean, ige) {
  return { student, mean, ige }
}
let class1 = [
  students_Elements('Álife', 7.5, 10),
  students_Elements('Reginaldo', 6.2, 10),
  students_Elements('William', 4.8, 10),
  students_Elements('Regis', 2.5, 10)
]

function print(array) {
  let maps = array.map(mani => {
    return mani.mean < 5 ? (mani.ige -= 2) : false
  })

  return maps
}

console.log(print(class1))
