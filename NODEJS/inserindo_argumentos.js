console.log(process.argv)
let args = process.argv.slice(2)
console.log(args)
let a = parseFloat(args[1])
let b = parseFloat(args[2])
let c = ''
if (args[0] == 's') {
  c = soma(a, b)
} else if (args[0] == 'm') {
  c = mult(a, b)
} else {
  c = 'Opcão invalida'
}
function mult(x, y) {
  return x * y
}
function soma(x, y) {
  return x + y
}
console.log(c)
