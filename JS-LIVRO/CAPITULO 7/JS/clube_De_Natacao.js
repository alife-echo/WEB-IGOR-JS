let buttonCategorize = document.querySelector('.btn_Categorize')
buttonCategorize.addEventListener('click', student)

function student() {
  let inName = document.querySelector('.in_Name')
  let name = inName.value.toUpperCase()
  let inAge = document.querySelector('.in_Age')
  let age = Number(inAge.value)
  let outRows_Name = document.querySelector('#out_rows_name')
  let out_Category = document.querySelector('#out_Category')
  if (name == '' || age == 0 || name.length == 0) {
    alert('Informe os dados corretamente')
    location.reload()
    inName.focus()
  }

  outRows_Name.innerHTML = returnStrokes(name)
  out_Category.innerHTML = categorizStudent(age)
}

function returnStrokes(name) {
  let tam = name.length
  let conc = ''
  for (let i = 0; i <= tam; i++) {
    if (name[i] == ' ') {
      conc += ' '
    } else {
      conc += '_'
    }
  }
  let x = name + '<br>' + conc

  return x
}
function categorizStudent(age) {
  if (age > 0 && age <= 12) {
    return 'Categoria:Infantil'
  } else if (age >= 13 && age <= 18) {
    return 'Categoria:Juvenil'
  } else if (age > 18) {
    return 'Categoria:Adulto'
  } else {
    return 'ERROR CONTATE A ADMINISTRAÇÃO'
  }
}
