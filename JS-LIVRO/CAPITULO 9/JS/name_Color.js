function printSplitsNamesColor (){
    let inName = document.querySelector('#inName').value
    generateSplits(inName)
}
function generateSplits(name){
  let splitsName = name.split(' ')
  let father = document.querySelector('main')
  for(let i = 0; i<splitsName.length; i++){
    let num = Math.ceil(Math.random() * 1000000)
    let h1 = document.createElement('h1')
    let text = document.createTextNode(splitsName[i])
    h1.style.color = `#${num}`
    h1.className = 'titles_Name'
    h1.appendChild(text)
    father.appendChild(h1)
  }
  let br = document.createElement('br')
  father.appendChild(br)
}
let btn_Print = document.querySelector('#btn_Prints_Splits')
btn_Print.addEventListener('click',printSplitsNamesColor)