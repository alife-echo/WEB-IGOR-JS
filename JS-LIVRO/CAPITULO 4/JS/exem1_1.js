let numeros = ''

for (let i = 1; i < 4; i++) {
  numeros = numeros + i + ' '
}
let resposta = document.getElementById('outResposta')
resposta.innerHTML = numeros
