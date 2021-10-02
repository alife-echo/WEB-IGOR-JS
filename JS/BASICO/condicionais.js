var idade = parseFloat(prompt('Digite sua idade'))

if (idade >= 35 && idade <= 70) {
  alert('Você Esta autorizado a comprar bebida')
  var pedido = prompt('Qual seu pedido ?')
  alert('Ó ' + pedido + ' Custa $Reaiss')
} else if (idade >= 70) {
  alert('Você Não Esta autorizado a comprar bebida')
} else if (idade >= 18) {
  alert('Você Esta autorizado a comprar bebida')
  var identidade = parseFloat(prompt('Mostre sua identidade'))
  alert('Sua identidade: ' + identidade + ' Esta comfirmada pode passar')
} else {
  alert('Você Não Estao Autorizado,Volte quando for maior de idade')
}
