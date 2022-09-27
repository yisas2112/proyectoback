const http = require("http")

const server = http.createServer((req, res)=>{
  console.log('el cliente solicitó algo')
  res.end('Hola d e el servidor')
})

server.listen(8080, ()=>{
  console.log('server lintener')
})

