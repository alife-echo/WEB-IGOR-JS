let btn_Add = document.querySelector('#btn_Add')
btn_Add.addEventListener('click', adicionar_Numero)

let btn_Check_order = document.querySelector('#btn_Check_Order')
btn_Check_order.addEventListener('click', checar_Ordem)

let number_array = []

function adicionar_Numero() {
  let in_Number = document.querySelector('#in_Number')
  let number = Number(in_Number.value)
  let outList = document.querySelector('#outList')
  if (number == 0 || number == '' || isNaN(number)) {
    alert('Informe os dados corretamente')
    location.reload()
    in_Number.focus()
  }
  number_array.push(number)
  outList.textContent = number_array
  in_Number.value = ''
  in_Number.focus()
}

function checar_Ordem(adicionar_Numero) {
  if (number_array.length == 0 || number_array == '') {
    alert('Não a elementos no array')
  }

  let outList = document.querySelector('#outList')
  let outList2 = document.querySelector('#outList2')
  let order = number_array.sort((a, b) => {
    return a - b
  })
  /*  if (order == false) {
    outList2.textContent = 'Os elementos não estão ordenados'
    outList.textContent = 'Elementos ordenados ' + order
  } else {
    outList2.textContent = 'Os elementos ja estavam ordenados ' + order
  } */
}
