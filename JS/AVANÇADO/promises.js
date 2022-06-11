/* let usuarios = ['Álife', 'Marcia', 'Jose']

function inserirUsuario(nome) {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      usuarios.push(nome)
      let error = true
      if (!error) {
        resolve()
      } else {
        reject({ mgs: 'Error' })
      }
    }, 1000)
  })
  return promise
}

function listarUsuarios() {
  console.log(usuarios)
}

inserirUsuario('Reginaldo')
  .then(listarUsuarios)
  .catch(error => {
    console.log(error.mgs)
  })
 */
document.querySelector('button').addEventListener('click', () => {
  let usuarios = ['Álife', 'Marcia', 'Jose']
  let verificar = users => {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        for (let i = 0; i < usuarios.length; i++) {
          if (usuarios[i] == users) {
            reject({ msg: alert('Usuario já inserido') })
            break
          } else {
            usuarios.push(users)
            resolve(alert('Usuario adicionado'))
            console.log(usuarios)
            break
          }
        }
      }, 2000)
    })
    return promise
  }

  verificar('Reginaldo').catch(error => {
    error.msg
  })
})
