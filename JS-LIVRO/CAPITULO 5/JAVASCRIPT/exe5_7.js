let concurse = []
let btn_Add = document.querySelector('#btn_Add')
btn_Add.addEventListener('click', adicionar_Numero)

let btn_List_All = document.querySelector('#btn_List_All')
btn_List_All.addEventListener('click', listar_Numeros)

let btn_Aproved = document.querySelector('#btn_Aproved')
btn_Aproved.addEventListener('click', aprovados)

function adicionar_Numero() {
  let input_Cadidate = document.querySelector('#in_Candidate')
  let in_Number_hit = document.querySelector('#in_Number')
  let name_Candidate = input_Cadidate.value
  let number_Hits = Number(in_Number_hit.value)
  if (name_Candidate == '' || number_Hits == '' || isNaN(number_Hits)) {
    alert('Insira os dados corretamente')
    location.reload()
    input_Cadidate.focus()
  }
  concurse.push({ name_Candidate: name_Candidate, number_Hits: number_Hits })

  input_Cadidate.value = ''
  in_Number_hit.value = ''
  input_Cadidate.focus
}

function listar_Numeros(adicionar_Numero) {
  if (concurse.length == 0) {
    alert('Não ha elementos na lista')
  }
  let list = document.querySelector('#out_List')
  let conc = ''
  for (let i = 0; i < concurse.length; i++) {
    conc +=
      concurse[i].name_Candidate +
      ',Pontos:' +
      concurse[i].number_Hits +
      '<br/>'
  }
  list.innerHTML = conc
}

function aprovados(adicionar_Numero) {
  if (concurse.length == 0) {
    alert('Não ha elementos na lista')
    location.reload()
  } else {
    let aproved_count = parseInt(prompt('Números de Acertos para Aprovação?'))
    let out_List2 = document.querySelector('#out_List2')
    /*  concurse.sort((a, b) => {
      return a.number_Hits - b.number_Hits
    }) */
    let list = ''
    for (let i = 0; i < concurse.length; i++) {
      if (concurse[i].number_Hits >= aproved_count) {
        concurse.sort((a, b) => {
          return b.number_Hits - a.number_Hits //a-b = crescente , b-a = decrescente
        })
        list +=
          concurse[i].name_Candidate +
          ',Pontos:' +
          concurse[i].number_Hits +
          '<br/>'
      }
      out_List2.innerHTML = list
    }
  }
}
