function promocaoClick() {
  let inputVeiculo = document.getElementById('in_veiculo')
  let inputPreco = document.getElementById('in_preco')
  let veiculoName = inputVeiculo.value
  let preco = Number(inputPreco.value)
  document.getElementById('resPromocao').innerHTML =
    '<strong> Promoção:' + veiculoName + '</strong>'
  document.getElementById('resEntrada').innerHTML =
    '<strong> Entrada de R$:' + preco * 0.5 + '</strong>'
  document.getElementById('resSaldo').innerHTML =
    '<strong> + 12x de R$:' + (preco * 0.5) / 12 + '</strong>'
}
let button = document.getElementById('btnConverter')
button.addEventListener('click', promocaoClick)
