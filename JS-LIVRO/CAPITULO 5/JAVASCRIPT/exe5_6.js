let btn_Add = document.querySelector('#btn_Add')
btn_Add.addEventListener('click', adicionar_Numero)

let btn_Check_order = document.querySelector('#btn_Check_Order')
btn_Check_order.addEventListener('click', checar_Ordem)

let btn_Reload = document.querySelector('#btn_reload')
btn_Reload.addEventListener('click', recarregar)
let number_array = []
let erros = []

function adicionar_Numero() {
  let in_Number = document.querySelector('#in_Number')
  let number = Number(in_Number.value)
  let outList = document.querySelector('#outList')
  if (number == 0 || number == '' || isNaN(number)) {
    alert('Informe os dados corretamente')
    location.reload()
    in_Number.focus()
  } else {
    number_array.push(number)
    outList.textContent = number_array
    if (erros.indexOf(number) >= 0) {
      alert('Dados duplicados')
      location.reload()
    } else {
      erros.push(number)
      in_Number.value = ''
      in_Number.focus()
    }
  }
}

function checar_Ordem(adicionar_Numero) {
  if (number_array.length == 0 || number_array == '') {
    alert('Não a elementos no array')
  }

  let outList = document.querySelector('#outList')
  let outList2 = document.querySelector('#outList2')
  let order = number_array.sort((a, b) => {
    return a - b
  }) // retorna um array
  for (let i = 0; i < erros.length; i++) {
    for (let j = 0; j < order.length; j++) {
      if (erros[i] == order[j]) {
        alert('Elementos estão crescentes')
        outList2.innerHTML = 'Elementos:' + erros
        btn_Add.disabled = true
        btn_Check_order.disabled = true
        btn_Add.className = 'oculta'
        btn_Check_order.className = 'oculta'
        btn_Reload.className = 'exibe'
        btn_Reload.className = 'button'
      } else {
        alert('Elementos não estão crescentes')
        location.reload()
      }
      break
    }
    break
  }

  /*  if (order == false) {
    outList2.textContent = 'Os elementos não estão ordenados'
    outList.textContent = 'Elementos ordenados ' + order
  } else {
    outList2.textContent = 'Os elementos ja estavam ordenados ' + order
  } */
}
function recarregar() {
  location.reload()
}
