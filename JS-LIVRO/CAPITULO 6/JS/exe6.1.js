let butto_mont = document.querySelector('#montar_dica')

butto_mont.addEventListener('click', montar_Dica)

function montar_Dica() {
  let in_Fruit = document.querySelector('#in_Fruit')
  let out_Dica = document.querySelector('#out_List')
  let fruit = in_Fruit.value.toUpperCase()

  if (fruit == '') {
    alert('Informe a fruta')
    in_Fruit.focus()
    return
  }

  let resposta = fruit.charAt(0)
  let estrelas = ''
  let tam = fruit.length

  for (let i = 1; i < tam; i++) {
    if (fruit.charAt(i) == fruit.charAt(0)) {
      resposta += fruit.charAt(0)
    } else {
      resposta += ' * '
    }
    estrelas += '*'
  }
  out_Dica.textContent = resposta
  in_Fruit.value = estrelas
}
