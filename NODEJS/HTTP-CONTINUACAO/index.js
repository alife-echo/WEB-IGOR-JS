const http = require('http')
const url = require('url')
const fs = require('fs')
http
  .createServer((request, response) => {
    let path = url.parse(request.url).pathname // pega minha url , saida = /
    console.log(path)

    if (path == '' || path == '/') {
      path = '/index.html'
    }
    let fileName = '.' + path // adicionar um ponto . atras da url atual, saida = ./
    //isso vai indicar que quero trabalhar apenas no meu diretorio
    // vai ler o meu arquivo, se houver um erro ele manda 404,é uma resposta final que é um h1 dizedo pagina não encontrada
    fs.readFile(fileName, (error, data) => {
      if (error) {
        response.writeHead(404, {
          'Content-Type': 'text/html;charset=utf-8;'
        })
        response.end('<h1>Pagina não encontrada</h1>')
      } else {
        // se a leitura do arquivo estiver certa, ele manda um 200 e uma texto html, escrevendo na pagina esse texto html pesquisado
        // no final ele encerra a requisição
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)
        response.end()
      }
    })
  }) //iniciar a porta 3000, se houver um erro, mostra o erro, se não, manda o else
  .listen(3000, error => {
    if (error) {
      console.log(error)
    } else {
      console.log('Servidor Rodando na Porta 3000')
    }
  })
