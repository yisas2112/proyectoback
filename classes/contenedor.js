const fs = require('fs')

module.exports = class Contenedor {
  constructor(nombre){
    this.nombre = nombre
  }

  async save(objeto){    
    console.log(objeto)      
    let array = []
      if(fs.existsSync(`./${this.nombre}.json`)){
        console.log('existe el archivo')
        let data = fs.readFileSync(`./${this.nombre}.json`)    
        
        array= JSON.parse(data)
        
        console.log(array)
        array.push(objeto)
        console.log(array)

        fs.writeFile(`./${this.nombre}.json`, JSON.stringify(array) , e =>{
          if(e){
            console.log('Hubo eror')
          }else
          {
            console.log('Éxito')
          }
        })    
      }else{          
        console.log('no existe el archivo')
          array.push(objeto)
          console.log(array)
          fs.appendFileSync(`./${this.nombre}.json`, JSON.stringify(array) , e =>{
            if(e){
              console.log('Hubo eror')
            }else
            {
              console.log('Éxito')
            }
          })    
      }
      
      
      
      
    
  }




}