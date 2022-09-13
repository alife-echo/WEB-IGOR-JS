const armChairs = 240

let reserve = []

function printStage(){
  let divStage = document.querySelector('.container_Palco')
  for(let i = 0; i<=armChairs;i++){
    let figure = document.createElement('figure')
    let imgStatus = document.createElement('img')
    if(reserve.indexOf(i.toString())>=0){
      imgStatus.src = '../imgs/reservers/ocupado.png'
    }
    else{
      imgStatus.src = '../imgs/reservers/disponivel.png'
    }
    imgStatus.className = 'poltrona'

    let figureCap = document.createElement('figcaption')
    let zeros = ''
  
    if(i < 10){
      zeros = '00'
   }
   else if(i<100){
     zeros = '0'
   }
    let num = document.createTextNode('[' + zeros + i + ']')
    figureCap.appendChild(num)
    figure.appendChild(imgStatus)
    figure.appendChild(figureCap)
   if(i % 24 == 12){
     figure.style.marginRight = '60px'
   }
  divStage.appendChild(figure)
   if(i % 24 == 0){
     let br = document.createElement('br')
     divStage.appendChild(br)
   }
  }
}
printStage()

function reserveArmChairs(){
  let divStage = document.querySelector('.container_Palco')
  let imgs = divStage.querySelectorAll('img')
  let figCaptions = divStage.querySelectorAll('figcaption')
  let inputText = Number(document.querySelector('#inText').value) 
  
 /*   for(let i = 0; i<=imgs.length;i++){
    if(inputText == imgs[i]){
      imgs[i].src = '../imgs/reservers/reservado.png'
      break 
    } */
    if(inputText == ''){
      alert('Informe os dados corretamente')
    }
    else{
      for(let i = 0; i<=imgs.length;i++){
        if(inputText == i){
          imgs[i].src = '../imgs/reservers/legends.png'
          console.log(inputText)
        }

      }
  }
  }
  function confirmReserveArmChairs(){
    let divStage = document.querySelector('.container_Palco')
    let inputText = Number(document.querySelector('#inText').value)
    let imgs = divStage.querySelectorAll('img')
    if(inputText == ''){
      alert('Informe os dados corretamente')
    }
    else{
      for(let i = 0; i<=imgs.length;i++){
        if(inputText == i){
         imgs[i].src = '../imgs/reservers/ocupado.png'
         console.log(inputText)
        }
  
     }
    }
   
  }
  /*
  for(let j = 0; j<=imgs.length;j++){
    if(inputText == imgs[j] ){
      imgsStorage += imgs[j]
      imgs[i].src = '../imgs/reservers/reservado.png'
      break
    }
  } */
 /*  for(let j = 0; j<=imgs.length;j++){
    for(let i = 0; i<=figCaptions.length;i++){
      if(imgs[i] == figCaptions[i] && imgs[i]== inputText &&  figCaptions[i] == inputText){
          imgs[i].src = '../imgs/reservers/reservado.png'
      }
    }
  } */


let btnConfirmResever = document.querySelector('#btnConfirmReserve')
btnConfirmResever.addEventListener('click',confirmReserveArmChairs)
let btnReserve = document.querySelector('#btnReserve')
btnReserve.addEventListener('click',reserveArmChairs)
