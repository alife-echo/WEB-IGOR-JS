function calcPesoIdeal() {
  let inputTexto = document.getElementById('inTexto')
  let input_Masculino = document.getElementById('rbMasculino')
  let input_Feminino = document.getElementById('rbFeminino')
  let inputAltura = document.getElementById('inAltura')
  let outResposta = document.getElementById('outPeso')

  let texto = inputTexto.value
  let masculino = input_Masculino.checked
  let feminino = input_Feminino.checked
  let altura = Number(inputAltura.value)

  if (texto == '' || (masculino == false && feminino == false)) {
    alert('Por favor insira o nome e os campos de sexo')
    texto.focus()
    return
  }

  if (altura == 0 || isNaN(altura)) {
    alert('Insira um  valor valido')
    altura.focus()
    return
  }
  if (masculino) {
    let calcPeso = 22 * (altura * altura)
    outResposta.focus()
    outResposta.innerHTML =
      '<h2>' +
      texto +
      ' :Seu peso ideal é ' +
      calcPeso.toFixed(3) +
      'kg' +
      '</h2>'
  } else {
    let calcPeso = 21 * (altura * altura)
    outResposta.focus()
    outResposta.innerHTML =
      '<h2>' +
      texto +
      ' :Seu peso ideal é ' +
      calcPeso.toFixed(3) +
      'kg' +
      '</h2>'
  }
}

function limparCampos() {
  location.reload()
  document.getElementById('inTexto').focus()
}
let buttonLimpar = document.getElementById('limpar')
buttonLimpar.addEventListener('click', limparCampos)
let button = document.getElementById('calcPeso')
button.addEventListener('click', calcPesoIdeal)
