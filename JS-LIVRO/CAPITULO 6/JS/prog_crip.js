document.querySelector('.btn_Cript').addEventListener('click', criptografar)
function criptografar() {
  let in_Value_Cript = document.querySelector('.in_Text')
  let cript = in_Value_Cript.value
  let tam = cript.length
  let list = ''
  let conc = ''
  let out_Res = document.querySelector('.out')
  if (cript == '' || tam == 0) {
    alert('Insira os dados corretamente')
  }
  for (let i = 0; i < tam; i++) {
    if (i % 2 != 0) {
      list += cript[i]
    } else {
      conc += cript[i]
    }
  }
  out_Res.textContent = list + conc
}

document
  .querySelector('.reverse_Cript')
  .addEventListener('click', descriptrografar)

function descriptrografar() {
  let out_Res = document.querySelector('.out')
  let in_Value_Cript = document.querySelector('.in_Text')
  let cript = in_Value_Cript.value
  out_Res.textContent = cript
}
