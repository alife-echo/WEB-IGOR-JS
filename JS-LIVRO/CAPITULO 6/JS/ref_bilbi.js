document.querySelector('.btn_Generate').addEventListener('click', () => {
  let in_Name = document.querySelector('.input_Author')
  let name = in_Name.value.toUpperCase() //name.indexOf('')== -1 ->se não existe espaço no nome do funcionario
  let outRes = document.querySelector('#out_Result')
  let sep = name.split(' ')
  let tam = sep.length
  let conc = ''
  if (name == '' || name.length == 0 || name.indexOf(' ') == -1) {
    alert('Insira os dados corretamente')
  }

  for (let i = 0; i < tam - 1; i++) {
    conc += sep[i].charAt(0) + '.'
  }
  let last = sep[tam - 1]
  outRes.textContent = 'Citação Bibliografica:' + last + ', ' + conc
})
