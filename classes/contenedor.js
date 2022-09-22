const fs = require('fs')

module.exports = class Contenedor {
  constructor(nombre){
    this.nombre = nombre
  }

  async save(objeto){          
      if(fs.existsSync(`./${this.nombre}.json`)){
        console.log('existe el archivo')
        let data = fs.readFileSync(`./${this.nombre}.json`)    
        
        let myObject = JSON.parse(data)
        console.log(myObject)
        myObject.push(objeto)
      }else{          
        console.log('no existe el archivo')
          fs.appendFileSync(`./${this.nombre}.json`, JSON.stringify(objeto) , e =>{
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