var armazenarLista = []
/*
onload = function () {
  let a = this.localStorage.getItem('name')
  var outLista = document.getElementById('outList')

  outLista.innerHTML = JSON.parse(a)
}*/
function plusTask() {
  var entradaTexto = document.getElementById('inputText')
  var outLista = document.getElementById('outList')

  var texto = entradaTexto.value

  if (texto == '') {
    alert('Insira um valor valido')
    entradaTexto.focus()
    return
  }

  armazenarLista.push({ id: Math.random(), conteudo: texto })
  var lista = ''

  for (var i = 0; i < armazenarLista.length; i++) {
    lista += `${i + 1}. ${armazenarLista[i].conteudo}
    <input type = "checkbox" onclick="clearTask(${
      armazenarLista[i].id
    })" class = "buttonClear"> <br>`
  }

  outLista.innerHTML = lista
  entradaTexto.value = ''
  entradaTexto.focus()

  localStorage.setItem('name', JSON.stringify(armazenarLista))
}
function clearTask(id) {}
function clearAllTask() {}

var buttonAdd = document.getElementById('btnInput')
buttonAdd.addEventListener('click', plusTask)
var buttoClear = document.getElementById('btnClearTask')
buttoClear.addEventListener('click', clearTask)
var buttonClearAll = document.getElementById('btnClearAll')
buttonClearAll.addEventListener('click', clearAllTask)
