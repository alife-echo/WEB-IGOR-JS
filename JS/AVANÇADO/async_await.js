let usuarios = ['Álife', 'Marcia', 'Jose']
function adicionar_User(users) {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      usuarios.push(users)
      let error = false
      if (!error) {
        resolve()
      } else {
        reject({ msg: 'Error usuario ja adicionado' })
      }
    }, 7000)
  })
  return promise
}

function listarUsuarios() {
  console.log(usuarios)
}

async function executar() {
  await adicionar_User('BOB') // espera a promise ser resolvida
  listarUsuarios()
}

executar()
