let buttonAdd = document.querySelector('#btnAdd')
buttonAdd.addEventListener('click', plusCar)

let button_List = document.querySelector('#btn_List_ALL')
button_List.addEventListener('click', listar_carros)

let button_Filter = document.querySelector('#btn_Filter_Price')
button_Filter.addEventListener('click', filter_Car)

let carros = []

function plusCar() {
  let inPrice = document.querySelector('#in_Price')
  let price = Number(inPrice.value)
  let inModel = document.querySelector('#in_Model')
  let model = inModel.value
  carros.push({ model: model, price: price })

  if (model == '' || price == 0 || isNaN(price)) {
    alert('Informe os dados corretamente')
    inModel.focus()
    return
  }

  inModel.value = ''
  inPrice.value = ''
}
function listar_carros(plusCar) {
  if (carros.length == 0) {
    alert('Insira o numero de carros')
    inModel.focus()
    return
  }
  let list = ''
  for (let i = 0; i < carros.length; i++) {
    list +=
      carros[i].model + ' Preço:' + carros[i].price.toFixed(2) + 'R$' + '<br>'
  }
  document.querySelector('#outList').innerHTML = list
}
function filter_Car() {}
