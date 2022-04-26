let video = document.getElementById('video1')

let video_play = document.querySelector('.play')
video_play.addEventListener('click', play)

let pause_video = document.querySelector('.pause')
pause_video.addEventListener('click', pause)

let retroceder_video = document.querySelector('.retroceder')
retroceder_video.addEventListener('click', retroceder)

let avancar_video = document.querySelector('.avancar')
avancar_video.addEventListener('click', avancar)

let aumentar_video = document.querySelector('.aumentar')
aumentar_video.addEventListener('click', aumentar)

let diminuir_video = document.querySelector('.diminuir')
diminuir_video.addEventListener('click', diminuir)

function retroceder() {
  video.currentTime -= 15
}
function avancar() {
  video.currentTime += 15
}
function aumentar() {
  video.playbackRate += 0.1
}
function diminuir() {
  video.playbackRate -= -0.1
}
function play() {
  video.play()
}
function pause() {
  video.pause()
  video.currentTime = 0
}
