const Tarea = require('./tarea');

class Tareas {

  _listado = {};

  get listadoArray() {

    const listado = [];
    Object.keys(this._listado).forEach(key => {
      listado.push(this._listado[key]);
    })

    return listado;

  }

  constructor() {
    this._listado = {};  
  }

  crearTarea(description = '') {
      
    const tarea = new Tarea(description);
    this._listado[tarea.id] = tarea;

    // return tarea;
  
  }

}



module.exports = Tareas;

