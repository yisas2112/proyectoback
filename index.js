class Persona {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    
    }

    getFullName = ()=>{
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}`
    }

    addMascotas = (nuevo)=>{
        this.mascotas.push(nuevo)
    }

    countMascotas = ()=>{
        let total = this.mascotas.length

        return total
    }

    addBook = (nombre, autor)=>{
        this.libros.push({
            nombre: nombre,
            autor: autor
        })
    }

    getBookNames = ()=>{
        return this.libros.nombre
    }

    
}