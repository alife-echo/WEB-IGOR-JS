function displayCoins(){
  let num1_00 = Math.ceil(Math.random() * 5)
  let num0_50 = Math.ceil(Math.random() * 5)
  let num0_25 = Math.ceil(Math.random() * 5)
  let num0_10 = Math.ceil(Math.random() * 5)
  let alt1_00 = 'Moeda de um real'
  let alt0_50 = 'Moeda de cinquenta centavos'
  let alt0_25 = 'Moeda de vinte e cinco centavos'
  let alt0_10 = 'Moeda de dez centavos'
  createCoins(num1_00,"um_real.png",alt1_00,'moeda1_00')
  createCoins(num0_50,"cinquenta_centavos.png",alt0_50,'moeda0_50')
  createCoins(num0_25,"vinte_cinco_centavos.png",alt0_25,'moeda0_25')
  createCoins(num0_10,"dez_centavos.png",alt0_10,'moeda0_10')
}
displayCoins()
function createCoins(num,coin,textAlt,classs){
  let sectionFuncContents = document.querySelector('section.responses')
  for(let i = 1; i<=num;i++){
    let newCoin = document.createElement('img')
    newCoin.src = '../imgs/' + coin
    newCoin.alt= textAlt
    newCoin.className = classs
    sectionFuncContents.appendChild(newCoin)
  }
  let br = document.createElement('br')
  sectionFuncContents.appendChild(br)
}
function checkSum(){
  let inSum = document.querySelector('#inCoins')
  let sum = Number(inSum.value) 
  if(sum == 0 || isNaN(sum)){
    alert('Informe o valor da soma (use ponto para separar decimais)')
    inSum.focus()
    return
  }
  let divCoins = document.querySelector('section.responses')
  let coins = divCoins.getElementsByTagName('img')
  let totalCoins = 0
  for(let i = 0; i<coins.length;i++){
    if(coins[i].className == 'moeda1_00'){
      totalCoins += 1
    }
    else if(coins[i].className == 'moeda0_50'){
      totalCoins += 0.50
    }
    else if(coins[i].className == 'moeda0_25'){
      totalCoins += 0.25
    }
    else if(coins[i].className == 'moeda0_10'){
      totalCoins += 0.10
    }
    else{
      alert('ERRO CONTATE ADMNISTRAÇÃO')
    }
  }
  let div = document.createElement('div')
  let h3 = document.createElement('h3')

  if(sum == totalCoins.toFixed(2)){
      div.className = 'print'
      var messeage = 'Parabéns!! Você acertou!'
  }
  else{
    div.className = 'print_error'
      var messeage = 'Ops.... A resposta correta é:' + totalCoins.toFixed(2)
  }
  let text = document.createTextNode(messeage)
  h3.appendChild(text)
  div.appendChild(h3)
  divCoins.appendChild(div)
  
  btCheck.disabled = true 
  btCheck.className = 'error'
}
let btCheck = document.querySelector('.btn_Response')
btCheck.addEventListener('click',checkSum)

let btPrint = document.querySelector('.btn_Display')
btPrint.addEventListener('click',function(){
   location.reload()
})