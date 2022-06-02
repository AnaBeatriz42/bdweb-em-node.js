
/*criando um servidor web na porta 8080 preparado para receber 
qualquer tipo de requisição feita com sucesso*/


//criando um servidor web com o express
const express = require('express')
const app = express()
const userRota = require('./rotas/rotas-user')
const postRota = require('./rotas/rotas-post')

app.use(express.json())


app.use('/usuarios', userRota)

app.use('/postagens', postRota)

app.get('/', (req, res) => {
    res.json({msg: "Pagina inicial"})
})


app.listen(8080, () => {
    console.log('Servidor pronto na porta 8080')
})

//criando um servidor web 

/*const http = require('http')
const { v4: uuidv4 } = require('uuid')

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/login":
       userRoute(req, res)
      break
    default:
      res.writeHead(404, { 'Content-Type': 'text/json' })
      res.write(JSON.stringify({ "msg": "Pagina não encontrado", "path": req.url }))
      res.end()
  }
})
server.listen(8080, () => {
    console.log('Servidor na porta 8080!')
})


function userRoute(req, res) {
     switch (req.method){
         case 'GET':
             res.writeHead(200, { 'Content-Type': "text/json" })
             res.write(JSON.stringify({ user: ["Anna", "Beatriz"]  }))
             res.end()
             break;
         case 'POST':
             res.writeHead(200, { 'Content-Type': "text/json" })
             res.write(JSON.stringify({ msg: "User criado" }))
             res.end()
             break
         default:
             res.writeHead(400, { 'Content-Type': "text/json" })
             res.write(JSON.stringify({ msg: "Operação não suportada!" }))
             res.end()
             break
     }
 }*/