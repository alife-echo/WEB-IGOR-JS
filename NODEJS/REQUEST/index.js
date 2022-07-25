const http = require('http')
const url = require('url')
const fs = require('fs')
const { resolve } = require('dns')
function handleFile(req,res,callback){
  let path = url.parse(req.url).pathname
  let fileName = '.' + path
  fs.readFile(fileName,(error,data)=>{
    if(error){
      if(callback){
       if(!callback(req,res)) {
        res.writeHead(404,{
          'Content-Type': 'text/html; charset=utf-8'
          
        }) 
        res.end('<h1>Pagina não encontrada </h1>')
       }
      }
    
     
    }
    else{
     res.writeHead(200,{'Content-Type':'text/html'})
     res.write(data)
     res.end(console.log('Conteudo mostrando'))
    }
  })
}
function handleRequest(req,res){
  let path = url.parse(req.url).pathname

  if(path == '/teste'){
    res.end('Teste')
    return true
 }
 return false
}
http.createServer((request,response)=>{

  handleFile(request,response,handleRequest)
  
}).listen(3000,error=>{
   if(error){
    console.log(error)
   }
   else{
    console.log('Servidor rodando na porta 3000')
   }
})