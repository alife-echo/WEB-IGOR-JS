


function addClub() {
  let inText = document.querySelector('#inClub') as HTMLInputElement
  let text: string = inText.value
  if (text == '' || text.length == 0) {
    alert('Informe um valor válido')
    location.reload()
  }
  /* verify(text) */
  generateClub(text)

  inText.value = ''
}
function generateClub(nameClub: string) {
  let father = document.querySelector('.content_Elements') as HTMLDivElement
  let textElement = document.createTextNode(nameClub)
  let h3 = document.createElement('h3')
  h3.appendChild(textElement)
  father.appendChild(h3)
}
/* function verify(nameClub: string) {
  let father = document.querySelector('.content_Elements') as HTMLElement
  let childs = father?.querySelectorAll('h3')
  console.log(childs?.values())
}
 */
function reloadPage() {
  location.reload()
}
let btnAdd = document.querySelector('#btn_Add') as HTMLInputElement
btnAdd.addEventListener('click', addClub)

let btnReload = document.querySelector('#btn_new_clubs') as HTMLInputElement
btnReload.addEventListener('click', reloadPage)