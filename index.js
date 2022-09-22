let Persona = require('./classes/index.js')
let Contenedor = require('./classes/contenedor.js')

const firstPerson = new Persona('jesús',
                             'Rodriguez',
                            [
                                {
                                'nombre': 'Maze Runner',
                                'autor' : 'James Dashner'
                                },
                                {
                                    'nombre': 'El señor de los Anillos',
                                    'autor' : 'J. R. R. Tolkien'
                                },
                                {
                                    'nombre': 'Harry Potter',
                                    'autor' : 'J. K. Rowling'
                                }
                            ] ,
                            ['Pepe', 'Tobi', 'Alma', 'Nina'])

//console.log(firstPerson.getFullName())
//console.log(firstPerson.addMascotas('pupi'))
//console.log(firstPerson.countMascotas())
//console.log(firstPerson.addBook('Ansiedad: Miedo, esperanza y la búsqueda de la paz interior', 'Scott Stossel'))
//console.log('nombres:' + firstPerson.getBookNames())


const json = [{
    title : 'Escuadra',
    price : 123.45    
}]


const json2 = {
    title : 'Escuadra',
    price : 123.45    
}
const prueba = new Contenedor('contenedor')

//prueba.save(json)
prueba.save(json2)