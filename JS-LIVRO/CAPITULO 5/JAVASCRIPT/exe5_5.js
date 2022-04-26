let btn_Add = document.querySelector('#btn_Add')
btn_Add.addEventListener('click', plus_Club)

let btn_List_All = document.querySelector('#btn_List_ALL')
btn_List_All.addEventListener('click', list_Clubs)

let btn_Table = document.querySelector('#btn_Table_games')
btn_Table.addEventListener('click', show_Table_game)
let club_Array = []
function plus_Club() {
  let name_Club = document.querySelector('#in_Name_club')
  let club = name_Club.value
  if (club == '') {
    alert('Insira os Dados corretamente')
    name_Club.focus()
  }
  club_Array.push({ club: club })
  name_Club.value = ''
  name_Club.focus()
}

function list_Clubs(plus_Club) {
  if (club_Array.length == '') {
    alert('Não ha Dados')
    name_Club.focus()
    return
  }
  let list = ''

  for (let i = 0; i < club_Array.length; i++) {
    list += i + 1 + '. ' + club_Array[i].club + '<br/>'
  }
  let outList = document.querySelector('#outList')
  outList.innerHTML = list
}

function show_Table_game(list_Clubs) {
  let len = club_Array.length
  if (club_Array.length == 0 || len % 2 == 1) {
    alert('Poucos times para dividir')
    return
  }
  let battle = ''
  let last = len - 1
  for (let i = 0; i < len / 2; i++) {
    battle += club_Array[i].club + ' X ' + club_Array[last - i].club + '<br/>'
  }
  let outList = document.querySelector('#outList')
  outList.innerHTML = battle
}
