document.querySelector('.btn_In_Text').addEventListener('click', () => {
  let in_Name = document.querySelector('.in_Text')
  let out = document.querySelector('.out')
  let name = in_Name.value.toUpperCase()
  let array_Name = name.split('')
  let reverse_Array = array_Name.reverse()
  let list = ''
  let conc = ''
  if (name == '' || name.length == 0) {
    alert('Insira os dados corretamente')
  }

  for (let i = 0; i < name.length; i++) {
    if (name[i] == reverse_Array[i]) {
      list += name[i]
      conc = ' é um Palíndromo'
    } else {
      list += name[i]
      conc = ' não é um Palíndromo'
    }
  }
  out.textContent = list + conc
})
