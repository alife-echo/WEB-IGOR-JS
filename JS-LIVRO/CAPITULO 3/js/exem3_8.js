function calcVelocidae() {
  let inputVelocidade = document.getElementById('inVelocidae')
  let inputCount = document.getElementById('inVelCont')
  let velocidade = Number(inputVelocidade.value)
  let contador = Number(inputCount.value)
  let outResposta = document.getElementById('outCalc')
  let vinte = velocidade * 0.2 + velocidade
  if (contador <= velocidade) {
    outResposta.innerHTML = '<h1> sem multa </h1>'
  } else if (contador > velocidade && contador <= vinte) {
    outResposta.innerHTML = '<h1>  multa leve </h1>'
  } else if (contador > velocidade && contador > vinte) {
    outResposta.innerHTML = '<h1>Multa grave </h1>'
  }

  if (isNaN(velocidade) || isNaN(contador)) {
    alert('Insira um numero valido por favor')
  }
}

let button = document.getElementById('btnCalcular')
button.addEventListener('click', calcVelocidae)
