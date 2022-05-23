let btn_Button = document.querySelector('#btn_botao')
btn_Button.addEventListener('click', animacao_button)
let caixa = document.querySelector('.caixa_pop_up')
function animacao_button() {
  caixa.className = 'caixa_exibir'
  setTimeout(sumir, 2000)
  function sumir() {
    caixa.className = 'caixa_exibir sumir_devagar'
  }
}
