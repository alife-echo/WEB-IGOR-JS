document
  .querySelector('.container section button')
  .addEventListener('click', () => {
    x = 3
    let in_Password = document.querySelector('.in_Validate')
    let passWord = in_Password.value
    let out_Res = document.querySelector('section h2.out_Res')
    let erros = []
    if (passWord.length < 8 || passWord.length > 15) {
      erros.push('Possuir valores entre 8 e 15')
    }
    if (passWord.match(/[0-9]/g) == null) {
      erros.push('Possuir numeros(no minimo,1)')
    }
    if (!passWord.match(/[a-z]/g)) {
      erros.push('possuir letras minusculas(no minimo,1)')
    }
    if (!passWord.match(/[A-Z]/g) || passWord.match(/[A-Z]/g).length == 1) {
      erros.push('Possuir letras maiúsculas(no minimo,2)')
    }
    if (!passWord.match(/[\W|_]/)) {
      erros.push('Possuir símbolos(no minimo,1)')
    }

    if (erros.length == 0) {
      out_Res.textContent = '0k! Senha Válida'
    } else {
      out_Res.textContent = 'Erro... A senha deve:' + erros.join(', ')
    }
  })
