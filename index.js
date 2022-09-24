//Desafío 1

// let Persona = require('./classes/index.js')

// const firstPerson = new Persona('jesús',
//                              'Rodriguez',
//                             [
//                                 {
//                                 'nombre': 'Maze Runner',
//                                 'autor' : 'James Dashner'
//                                 },
//                                 {
//                                     'nombre': 'El señor de los Anillos',
//                                     'autor' : 'J. R. R. Tolkien'
//                                 },
//                                 {
//                                     'nombre': 'Harry Potter',
//                                     'autor' : 'J. K. Rowling'
//                                 }
//                             ] ,
//                             ['Pepe', 'Tobi', 'Alma', 'Nina'])

//console.log(firstPerson.getFullName())
//console.log(firstPerson.addMascotas('pupi'))
//console.log(firstPerson.countMascotas())
//console.log(firstPerson.addBook('Ansiedad: Miedo, esperanza y la búsqueda de la paz interior', 'Scott Stossel'))
//console.log('nombres:' + firstPerson.getBookNames())







//Desafío 2
 let Contenedor = require('./classes/contenedor.js')
const json = {
    title : 'Regla',
    price : 123.40    
}

const content = new Contenedor('contenedor')

//Se crea el archivo y se agrega al objeto
//content.save(json)

//Se obtienen el elemento según ID
content.getById(2)

//Se obtiene todos los elementos del archivo.
//content.getAll()

//Se elimina un elemento según su ID
//content.deleteById(2)

//Elimino todos los elementos
//content.deleteAll()
