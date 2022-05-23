let add = document.querySelector('#btn_Add')
add.addEventListener('click', add_news)
let list_All = document.querySelector('#btn_List_All')
list_All.addEventListener('click', list_news)

let news = []

function add_news() {
  let in_News = document.querySelector('#in_News')
  let text_News = in_News.value
  let out_Response = document.querySelector('#out_List')
  if (text_News == '' || text_News == 0) {
    alert('Informe os dados corretament')
    in_News.focus()
    location.reload()
  }
  news.push(text_News)
  in_News.value = ''
  in_News.focus()
  let list = ''
  for (let i = 0; i < news.length; i++) {
    list += '<h3>' + (i + 1) + '.' + news[i] + '</h3>'
  }
  out_Response.innerHTML = list
}

function list_news(add_news) {
  let number_News = document.querySelector('#in_News')
  let number = Number(number_News.value)
  if (number == 0 || isNaN(number) || number == '') {
    alert('Informe os dados corretamente')
    in_News.focus()
    location.reload()
  }
  if (news.length == 0) {
    alert('Não ha elementos na lista')
    location.reload()
    in_News.focus()
  }
  if (number > news.length) {
    alert('Poucas Noticias')
    number_News.focus()
  }
  let out_Sum_News = ''
  let x = news.reverse()
  for (let i = 0; i < number; i++) {
    out_Sum_News = '<h3>' + x[i] + '</h3>'
    /* out_Sum_News = '<h3>' + x[j] + '</h3>' */
  }
  let out_Response = document.querySelector('#out_List')
  out_Response.innerHTML = out_Sum_News
  let out_Num = document.querySelector('#out_News_Number')
  out_Num.innerHTML = 'Noticias Cadastradas:' + news.length
  let list = ''
  let print = document.querySelector('#out_List2')
  print.innerHTML = list
}
