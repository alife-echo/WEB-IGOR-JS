let nome = ''
/* if (nome == '') {
  throw 'O nome não pode ser vazio'
}  */ // se o if estiver fora do try catch ele vai para aplicação exibindo apenas o erro da condição não satisfeita
try {
  if (nome == '') {
    throw 'O nome não pode ser vazio'
  }
  console.log(nome) //  se a variavel nome não existe , joga pro catch é continua o codigo
} catch (err) {
  console.log('Houve um erro,', err)
}
console.log('boa noite')
// maneira de tratamento de erros
// caso algo esteja errado no meu codigo
// talvez eu não queira parar toda aplicação por causa daquilo
// esse problema pode ser solucionado por try catch
