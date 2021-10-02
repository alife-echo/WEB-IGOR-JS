// * && e
// * || ou
// * Negativo

/* var a = true
var b = true

var c = a && b

console.log(c)
 */

/* var idade = 9
var menor10 = idade <= 10
var maior65 = idade >= 65

var gratuidade = menor10 || maior65

console.log('Idade', idade)
console.log('Maior que 65', maior65)
console.log('Menor que 10', menor10)
console.log('Tem direito a gratuidade ?', gratuidade)
*/

var nota1 = 7.5
var nota2 = 8.5
var notas = (nota1 + nota2) / 2
var passou = notas >= 7
var reprovou = !passou

console.log('Voce Passou ', passou)
console.log('Voce reprovou  ', reprovou)
console.log('Media : ', notas)
