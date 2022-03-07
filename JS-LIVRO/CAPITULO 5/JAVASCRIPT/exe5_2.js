let btnApostar = document.querySelector('#btn_Apostar')
let btnJogar = document.querySelector('#btJogar')
btnJogar.addEventListener('click', function () {
  location.reload()
})
let random = Math.floor(Math.random() * 100) + 1
let erros = []
const CHANCES = 6
btnApostar.addEventListener('click', function () {
  let inNumber = document.querySelector('#in_Number')
  let number = Number(inNumber.value)
  let outErros = document.querySelector('#out_Erros')
  let outChances = document.querySelector('#out_Chances')
  let outDica = document.querySelector('#out_Dica')
  let outResultado = document.querySelector('#out_Resultado')
  let conc = ''
  if (number <= 0 || number > 100 || isNaN(number)) {
    alert('Insira um numero valido')
    inNumber.focus()
    return
  }
  if (number == random) {
    // se o numero digitado for = ao sorteado
    alert('Parabéns Você Acertou')
    btnApostar.disabled = true
    btnJogar.className = 'exibe'
    btnJogar.className = 'waves-effect waves-light btn-large'
    outDica.textContent = 'Parabéns!!Número sorteado:' + random
  } else {
    // se o numero digitado não for igual ao sorteado
    // cuida para que um numero digitado, não seja processado de novo
    if (erros.indexOf(number) >= 0) {
      alert('Você já apostou o número ' + number + ' .Tente outro..')
    } else {
      // mas se o numero errado não for repetido
      erros.push(number)
      var numErros = erros.length //obtem o tamanho do vetor erros
      var numChances = CHANCES - numErros // subtrai o numero de erros dos numeros de chances
      outErros.textContent = numErros + '(' + erros.join(',') + ')' //coloca os erros separados por virgula
      outChances.textContent = numChances // calculado atraves do numeros de chances - numero de erros
      // se minhas chances forem zero
      if (numChances == 0) {
        alert('Suas chanches acabaram')
        btnApostar.disabled = true
        btnJogar.className = 'exibe'
        btnJogar.className = 'waves-effect waves-light btn-large'
        outDica.textContent = 'Game 0ver!! Numero sorteado era:' + random
      } else {
        // se minhas chances não tiverem acabado
        var dica = random > number ? 'Maior' : 'Menor'
        outDica.textContent =
          ' Dica: Tente um número ' + dica + ' que ' + number
      }
    }
  }
})
//indexOf = A busca occore apartir do inicio do vetor
//lastIndexOf = A buscar ocorre apartir do final do vetor
// server para localizar os numeros colocados em seus parenteses
/* let array = [5, 6, 8, 3, 6, 9]
console.log(array.lastIndexOf(10))
 */
