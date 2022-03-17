let btnConveter = document.querySelector('#btnConvert')
btnConveter.addEventListener('click', function () {
  let inSeconds = document.querySelector('#inSeconds')
  let seconds = Number(inSeconds.value)
  let outSeconds = document.querySelector('#outConvert')
  let restoTempo = seconds % 3600
  let seg = restoTempo % 60
  let min = Math.floor(restoTempo / 60)
  let hora = Math.floor(seconds / 3600)
  outSeconds.textContent =
    hora + ' Horas ' + min + ' Min e ' + seg + ' Segundos'
  if (inSeconds == ''  || inSeconds == 0) {
    alert('Digite um número valido')
    location.reload()
    return
  }
})
