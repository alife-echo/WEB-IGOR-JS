function print_Candle(){
  let inputCandles = document.querySelector('#inCandlle')
  let candles = inputCandles.value
  generateImgsNumbers(candles)
}
function generateImgsNumbers(stringNumberCandles){
  let splitNumbers = stringNumberCandles.split('')
  let father = document.querySelector('main')
  let print_Candles = document.querySelector('#btn_Add')
  for(let i = 0;i<splitNumbers.length;i++){
      let img = document.createElement('img')
      img.className = 'imagens_numeros'
      img.src = '../imgs/numeros/'+splitNumbers[i]  + '.png'
      father.appendChild(img)
    
  }
  print_Candles.disabled = true
  print_Candles.className = ' offButton'
}
function reloadPage(){
  location.reload()
}

let reload_Candles = document.querySelector('#btn_New')
reload_Candles.addEventListener('click',reloadPage)

let print_Candles = document.querySelector('#btn_Add')
print_Candles.addEventListener('click',print_Candle)
