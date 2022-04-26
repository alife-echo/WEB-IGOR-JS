let btn_Add = document.querySelector('#btn_Add')
btn_Add.addEventListener('click', adicionar_Nome)

let btn_List = document.querySelector('#btn_List_ALL')
btn_List.addEventListener('click', listar_Tudo)

let btn_Sum_up = document.querySelector('#btn_Sum_up')
btn_Sum_up.addEventListener('click', resumir_Por_Idade)

let child = []

function adicionar_Nome() {
  let inName = document.querySelector('#in_Name_Child')
  let name = inName.value
  let inAge = document.querySelector('#in_Age')
  let age = Number(inAge.value)
  if (name == '' || age == 0 || isNaN(age)) {
    alert('Informe corretamente os Dados')
    inName.focus()
    return
  }
  child.push({ name: name, age: age })

  inName.value = ''
  inAge.value = ''
  inName.focus()
}

function listar_Tudo(adicionar_Nome) {
  if (child.length == 0) {
    alert('Não a crianças na lista')
    return
  }
  let list = ''
  for (let i = 0; i < child.length; i++) {
    list += child[i].name + ' - ' + child[i].age + ' anos </br>'
  }
  let outList = document.querySelector('#outList')
  outList.innerHTML = list
}

function resumir_Por_Idade() {
  if (child.length == 0) {
    alert('Não a crianças na lista')
    return
  }
  let copia = child.slice()
  copia.sort(function (a, b) {
    return a.age - b.age
  })
  let resumo = ''
  let aux = copia[0].age // menor idade do vetor ordenado
  let names = [] // vetor para colocar os nomes de cada idade

  for (let i = 0; i < copia.length; i++) {
    if (copia[i].age == aux) {
      // se a idade for igual ao menor idade do vetor = adiciona um nome
      names.push(copia[i].name)
    } else {
      resumo += aux + ' Ano(s):' + names.length + ' criança(s) - ' // mostra a idade e quantas crianças possuem aquela idade
      resumo += ((names.length / copia.length) * 100).toFixed(2) + '%<br/>' // calculo de porcetagem de crianças
      //(numeros total de nomes dividido pelo o tamanho do vetor) vezes 100
      resumo += '(' + names.join(',') + ')<br/><br/>'
      aux = copia[i].age // obtem a nova idade na ordem
      names = [] // limpa o vetor nomes
      names.push(copia[i].name) // adiciona o primeiro da nova idade
    }
  }
  resumo += aux + ' Anos: ' + names.length + ' criança(s) - '
  resumo += ((names.length / copia.length) * 100).toFixed(2) + '%<br/>'
  resumo += '(' + names.join(', ') + ') <br/> <br/>'
  document.querySelector('#outList').innerHTML = resumo
}
