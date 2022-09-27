const express = require('express')
const app = express()

const livereload = require('livereload');
const reload = livereload.createServer();
reload.watch("/server.js");

const server = app.listen(8080, ()=>{
  console.log('Servidor escuchando en el puerto 8080')  
})



server.on("error", error =>console.log(`Error en el servidor ${error}`))


app.get('/', (req, res)=>{
  res.send({mensaje: 'Hola Mundo'})
})