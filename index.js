let Persona = require('./classes/index.js')

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

console.log(firstPerson.getFullName())
console.log(firstPerson.addMascotas('pupi'))
console.log(firstPerson.countMascotas())
console.log(firstPerson.addBook('Ansiedad: Miedo, esperanza y la búsqueda de la paz interior', 'Scott Stossel'))
console.log('nombres:' + firstPerson.getBookNames())

