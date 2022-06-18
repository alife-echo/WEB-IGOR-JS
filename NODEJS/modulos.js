let args = process.argv.slice(2)

// fazendo a soma e multiplicação por arquivos separados
/*
let soma = require('./soma')
let mult = require('./mult')
*/
// fazendo soma é multiplicação com um só arquivo
let calc = require('./calc')
let a = parseFloat(args[1])
let b = parseFloat(args[2])
let c = ''
if (args[0] == 's') {
  c = calc.soma(a, b)
} else if (args[0] == 'm') {
  c = calc.mult(a, b)
} else {
  c = 'Opcão invalida'
}
console.log(c)
