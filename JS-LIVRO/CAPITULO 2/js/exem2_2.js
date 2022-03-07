function converter() {
  let inputTitulo = document.getElementById('in_Titulo')
  let inputDuracao = document.getElementById('in_Duracao')
  let titulo = inputTitulo.value
  let duracao = Number(inputDuracao.value)
  let hora = Math.floor(duracao / 60)
  let min = duracao % 60
  document.getElementById('resTitulo').textContent = 'Titulo filme : ' + titulo
  document.getElementById('resDuracao').textContent =
    hora + ':Hora(s) e' + min + ':Minuto(s)'
}
var button = document.getElementById('buttConverter')
button.addEventListener('click', converter)
