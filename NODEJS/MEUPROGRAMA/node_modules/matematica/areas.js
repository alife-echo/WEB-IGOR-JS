module.exports.area_quadrado = lado => {
  return lado * lado
}
module.exports.area_triangulo = (base, altura) => {
  return (base * altura) / 2
}
module.exports.area_retangulo = (base, altura) => {
  return base * altura
}
module.exports.area_circulo = raio => {
  const pi = Math.PI
  return pi * (raio ^ 2)
}
