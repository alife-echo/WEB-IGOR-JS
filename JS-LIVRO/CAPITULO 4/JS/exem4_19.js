let buttonCreateStar = document.querySelector('#btnCreateStar')
buttonCreateStar.addEventListener('click', function () {
  let inNumber = document.querySelector('#inNumber_star')
  let inNumberStar = Number(inNumber.value)
  let outList = document.querySelector('#outList')
  let conc = ''
  if (inNumberStar == 0 || inNumberStar == '' || isNaN(inNumberStar)) {
    alert('Digite um numero valido')
    inNumber.focus()
    location.reload()
  }
  // sempre quando for trabalhar com uma strig em for , lembrar da possibilidade de usar dois fors , um for para percorer os valor digitado , é outro for para colocar a string no valor digitado

  for (let i = 1; i <= inNumberStar; i++) {
    //percorrer o valor digitado
    for (let j = 1; j <= i; j++) {
      // preencher o valor digitado com a string
      conc += '*'
    }
    conc += '<br>'
  }
  outList.innerHTML = conc
})
