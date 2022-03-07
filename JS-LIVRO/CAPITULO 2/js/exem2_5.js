function clickPromocao() {
  let inputProduto = document.getElementById('in_produto')
  let inputPreco = document.getElementById('in_preco')
  let produto = inputProduto.value
  let preco = Number(inputPreco.value)
  let calc_desconto = preco * 0.5
  let calc = preco * 3 - calc_desconto
  document.getElementById('outPromocao').innerHTML =
    '<h3>' + produto + ' Promoção: Leve 3 por R$:' + calc + '</h3>'
  document.getElementById('tercerio_Produto').innerHTML =
    '<h3> O 3-produto custa apenas R$:' + calc_desconto + '</h3>'
}
let button = document.getElementById('btnCalcular')
button.addEventListener('click', clickPromocao)
