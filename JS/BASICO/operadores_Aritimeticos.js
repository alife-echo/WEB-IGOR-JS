// * + Adição
// * - Subtração
// * * Multiplicação
// * / Divisão
// * % Modulo
// * ++ Incremento
// * -- Decremento

/* var a = 17
var b = 20

var c = a % b
console.log('Resultado : ' + c)
 */

/* var a = 30
var b = a--

console.log(b)
 */
console.time()
var nota1 = 8.5
var nota2 = 9.5
var nota3 = 7.5
var nota4 = 5.5

var media = (nota1 + nota2 + nota3 + nota4) / 4
if (media => 7) {
  console.log('Sua nota : ' + media + ' Você Passou!')
} else {
  console.log('Sua nota : ' + media + ' Você Reprovou!')
}
console.timeEnd()
