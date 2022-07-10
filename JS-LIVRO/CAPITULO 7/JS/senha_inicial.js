let button_Password = document.querySelector('.btn_Generate_Password')
button_Password.addEventListener('click', generate_Password)

function generate_Password() {
  let inName = document.querySelector('.in_Name')
  let name = inName.value.toLowerCase()
  let outResult = document.querySelector('#out_Result')
  validate_Name(name)
  let x = get_Last_Name(name)
  let y = count_vowels(name)
  outResult.textContent = x + y
}
function validate_Name(name) {
  if (name.length == 0 || name == '' || name.indexOf(' ') == -1) {
    alert('Informe os dados corretamente')
    location.reload()
  }
}
function get_Last_Name(name) {
  let lastName = name.lastIndexOf(' ')
  let copy = name.substr(lastName)
  return copy
}

function count_vowels(name) {
  let count_Name = name.match(/[aeiou]/g).length
  let condicion = count_Name <= 9 ? '0' + count_Name : count_Name
  return condicion
}
