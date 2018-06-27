
const fs = require('fs');


let listadoPorHacer = [];


//Guarda en el json
const guardarDB = () => {

  let data = JSON.stringify(listadoPorHacer);

  fs.writeFile('db/data.json', data, (err) => {
      if (err) throw new Error('No se pudo grabar', err)
  });

}

//Cargar a el json
const cargarDB = () => {

   try {
     listadoPorHacer = require('../db/data.json');
   } catch (e) {
     listadoPorHacer = [];
   }

}

//Crear tarea y guarda en json
const crear = (descripcion) => {

   cargarDB();

    let porHacer = {
      descripcion,
      completado:false
    };

    listadoPorHacer.push( porHacer );

    guardarDB();

    return porHacer;

}


//Regresar todo el listado
const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}


const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
      return tarea.descripcion === descripcion;
    });

    if(index >= 0){
      listadoPorHacer[0].completado = completado;
      guardarDB();
      return true;
    }else{
      return false;
    }

}



const borrar = (descripcion) => {


    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea => {
      return tarea.descripcion !== descripcion;
    });

    if(listadoPorHacer === nuevoListado){
      return false;
    }else{
      listadoPorHacer = nuevoListado;
      guardarDB();
      return true;
    }


}

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}
