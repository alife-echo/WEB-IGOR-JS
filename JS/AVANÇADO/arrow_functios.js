//Maneiras de criar funções
function dobr(x) {
  return x * x //Função Normal
}
alert(dobr(5))

let dobro = function (h) {
  return h * h //Função anonima
}
alert(dobro(3))

let dobro2 = y => {
  return y * y //Arrow Function
}
alert(dobro2(2))
// se a função retorna apenas um valor
let doubro3 = u => u * u
alert(doubro3(7))

let dobro4 = () => {
  console.log(this.x) // funçao anonima não entende o contexto de x
}

let numero = {
  x: 8,
  d: dobro4
}
// arrow function não entende o this,nem o bind
let context = dobro4.bind(numero)
context()
numero.d()
