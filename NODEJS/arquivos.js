let fs = require('fs')
// metodos é parametros
//writeFile parametros = nome do arquivo, o que ira escrever, call back
//rename = nome do arquivo que sera renomeado, novo nome, callBack
//appendFile = nome do arquivo que sera atualizado, o que sera escrito, call back
//unlink = nome do arquivo que sera exlucido, callback
//readFile = nome do arquivo que sera lido ,codificação('utf8'), callback
/* fs.readFile('NovoNome.txt', 'utf8', function (error, data) {
  if (error) {
    throw error
  }
  console.log(data)
})
 */

let args = process.argv.slice(2)
let File_name = args[0]
let conc = ''
for (let i = 1; i < args.length; i++) {
  conc += args[i] + ' '
}
/* fs.readFile(fileName, 'utf8', (error, datas) => {
  if (error) {
    throw error
  }
  fs.writeFile(fileName, datas.toUpperCase(), error => {
    if (error) {
      throw error
    }
    console.log('Arquivo gerado com sucesso')
  })
}) */
fs.writeFile(File_name, conc, error => {
  if (error) {
    throw error
  }
  fs.readFile(File_name, 'utf-8', (error, datas) => {
    if (error) {
      throw error
    }
    console.log('Arquivo criado com sucesso')
    console.log(datas)
  })
})
