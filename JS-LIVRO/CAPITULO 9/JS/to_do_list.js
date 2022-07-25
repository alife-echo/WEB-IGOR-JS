function addTask(){
 let inTasks = document.querySelector('#in_Task')
 let Tasks = inTasks.value

 if(Tasks == ''){
  alert('Informe a tarefa')
  inTasks.focus()
  return
 }

  let divContentTodo = document.querySelector('.content_todo') 
  let li = document.createElement('li')
  let text = document.createTextNode(Tasks)
  li.appendChild(text)
  let stylesLi =  divContentTodo.appendChild(li)
  stylesLi.className = 'numbers'  
  inTasks.value = ""
  inTasks.focus()
}

function teclado(element){
  if(element.keyCode == 13){
    addTask()
  }
}
function selectTask(){
  let li = document.querySelectorAll('li')
  let numLi = li.length

  if(numLi == 0){
    alert('Não tarefas para selecionar')
    return 
  }
  let aux = -1
  for(let i = 0; i<numLi;i++){
    if(li[i].className == 'tarefaSelecionada'){
      li[i].className = 'tarefaNormal'
      li[i].className = 'numbers'

      aux = i
      break
    }
  }
  if(aux == numLi - 1){
    aux = -1
  }
  li[aux + 1].className = 'tarefaSelecionada'
 

}
 function withDrawElement(){
  let divContentTodo = document.querySelector('.content_todo') 
  let li = document.querySelectorAll('li')
  let numLi = li.length

  let aux = -1

  for(let i =0;i<numLi;i++){
    if(li[i].className == 'tarefaSelecionada'){
        aux = i
        break
    }
  }
  if(aux == -1){
    alert('Coloque uma tarefa na lista')
    return 
  }
  if(confirm(`Confirma a exclusão de ${li[aux].textContent} ?`)){
    divContentTodo.removeChild(li[aux])
    
  }
} 

function storageElements(){
  let li = document.querySelectorAll('li')
  let numLi = li.length
  if(numLi == 0){
    alert('Não há tarefas para serem salvas')
    return
  }
  let tasks = ''

  for(let i = 0; i<numLi;i++){
    tasks += li[i].textContent + ';'
  }
  localStorage.setItem('tasksDay',tasks.substring(0,tasks.length - 1))

  if(localStorage.getItem('tasksDay')){
    alert('Tarefas Salvas')
  }
}
function recoverElements(){
  if(localStorage.getItem('tasksDay')){
    let tasks = localStorage.getItem('tasksDay').split(';')
    let divContentTodo = document.querySelector('.content_todo') 
     for(let i =0; i<tasks.length;i++){
      let li = document.createElement('li')
      let text = document.createTextNode(tasks[i])
      li.appendChild(text)
      li.className = 'numbers'
      divContentTodo.appendChild(li)
    } 
    
  }
  else{
    alert('Não há elementos gravados')
  }

}

let inTasks = document.querySelector('#in_Task').addEventListener('keypress',teclado)

let buttonAdd = document.querySelector('#btn_Add')
buttonAdd.addEventListener('click',addTask)

let btnSelect = document.querySelector('#btn_Select')
btnSelect.addEventListener('click',selectTask)

 let withDraw_Select = document.querySelector('#btn_withDraw')
withDraw_Select.addEventListener('click',withDrawElement) 

let btn_Storageli = document.querySelector('#btn_Storage')
btn_Storageli.addEventListener('click',storageElements)

 let btn_recover = document.querySelector('#btn_recover')
btn_recover.addEventListener('click',recoverElements) 