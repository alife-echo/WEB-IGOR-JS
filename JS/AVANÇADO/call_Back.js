//passar como um atributo uma função
/* function ola() {
  console.log('olá')
}
function tchau() {
  console.log('Tchau')
}
function saudacao(s, nome, t) {
  s()
  console.log(nome)
  t()
}

saudacao(ola, 'igor', tchau)
 */
//serve pra fazer algo assicrono,executa uma função depois que tudo estiver carregado
let usuarios = ['Álife', 'Marcia', 'Jose']

function inserirUsuario(nome, callBack) {
  setTimeout(() => {
    usuarios.push(nome)
    callBack()
  }, 1000)
}

function listarUsuarios() {
  console.log(usuarios)
}

inserirUsuario('Reginaldo', listarUsuarios())
