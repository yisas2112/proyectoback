const fs = require('fs')

module.exports = class Contenedor {
  constructor(nombre){
    this.nombre = nombre
  }

  async save(objeto){    
    let obj ={}      
    let array = []
    let lastId = 0
      if(fs.existsSync(`./${this.nombre}.json`)){        
        let data = fs.readFileSync(`./${this.nombre}.json`)                    
        array= JSON.parse(data)        
        array.map((e)=>{
          lastId = e.id
        })

        obj = {
          title : objeto.title,
          price : objeto.price,
          id : lastId + 1
        }        
        
        array.push(obj)        

        fs.writeFile(`./${this.nombre}.json`, JSON.stringify(array) , e =>{
          if(e){
            console.log('Hubo un error al agregar el objeto al archivo')
          }else
          {
            console.log('Se agregó el obj correctamente al json')
          }
        })    
      }else{                  
          obj = {
            title : objeto.title,
            price : objeto.price,
            id : 1
          }          
          array.push(obj)
          
          fs.appendFileSync(`./${this.nombre}.json`, JSON.stringify(array) , e =>{
            if(e){
              console.log('Ocurrió un error al crear el archivo')
            }else
            {
              console.log('Se creó el archivo con éxito')
            }
          })    
      }
    }

    getById(id){      
      let array = []
      let dataReturn
      let data = fs.readFileSync(`./${this.nombre}.json`)                    
        array= JSON.parse(data)        
        array.map((data)=>{          
          if(data.id == id){
            dataReturn = data
          }
        })
        
        return console.log(dataReturn)
    }

    getAll(){
      let array = []      
      let data = fs.readFileSync(`./${this.nombre}.json`)                    
      array= JSON.parse(data)       

      console.log(array)

    }

    deleteById(id){
      
      let newArry = []
      let data = fs.readFileSync(`./${this.nombre}.json`)                    
      let array = JSON.parse(data)                

        array.map((e,index)=>{
          if(e.id !== id){
            newArry.push(e)
          }
        })

        fs.writeFile(`./${this.nombre}.json`, JSON.stringify(newArry) , e =>{
          if(e){
            console.log('Ocurrió un error al eliminar el elemento')
          }else
          {
            console.log('Se eliminó el objeto correctamente')
          }
        })    
    }

    deleteAll(){
      let arrayVacio = []

      fs.writeFile(`./${this.nombre}.json`, JSON.stringify(arrayVacio) , e =>{
        if(e){
          console.log('Ocurrió un error al eliminar todos los elementos')
        }else
        {
          console.log('Se eliminaron todos los elementos')
        }
      })    

    }




}