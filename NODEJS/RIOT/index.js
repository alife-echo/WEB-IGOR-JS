let url = require('url')
let fs = require('fs')
let http = require('http')

http
  .createServer((request, response) => {
    let path = url.parse(request.url).pathname
    if (path == '/' || path == '') {
      path = 'index.html'
    }
    let pathName = '.' + path
    fs.readFile(pathName, (error, data) => {
      if (error) {
        response.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
        response.end('<h1>Pagina não encontrada</h1>')
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' })
        response.write(data)
        response.end()
      }
    })
  })
  .listen(3000, err => {
    if (err) {
      console.log(err)
    } else {
      console.log('Servidor rodando na porta 3000')
    }
  })
