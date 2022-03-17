let idades = [19, 9, 3, 6, 6, 8, 5]
let maiores = false

for (let i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    console.log(idades[i])
    maiores = true
  }
}

if (!maiores) {
  console.log('Não a idade maiores que 18 na lista')
}
