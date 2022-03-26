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


  borrarTarea( id = '' ) {

    if ( this._listado[id] ) {
      delete this._listado[id];
    } // else {
    //   console.log('No existe esa tarea');
    // }

  }


  cargarTareasFromArray(tareas = []) {

    tareas.forEach( tarea => {
      this._listado[tarea.id] = tarea;
    });
    
  }


  crearTarea(description = '') {
      
    const tarea = new Tarea(description);
    this._listado[tarea.id] = tarea;
  
  }


  listadoCompleto() {

    console.log();
    this.listadoArray.forEach( (tarea, id) => {

      const idx = `${id + 1}`.green;
      const {description, completedEn} = tarea;
      const estado = (completedEn) ? 'Completada'.green : 'Pendiente'.yellow;

      console.log(`${idx} - ${description} - ${estado}`);

    });
  }


  listarPendientesCompletadas( completadas = true ) {

    console.log();
    let contador = 0;

    this.listadoArray.forEach( tarea => {

      const {description, completedEn} = tarea;
      const estado = (completadas) ? 'Completada'.green : 'Pendiente'.yellow;

      if ( completadas ) {  
        if ( completedEn ) {
          contador++;
          console.log(`${contador.toString().green} - ${description} - ${completedEn.green}`);
        }
      } else {
        if ( !completedEn ) {
          contador++;
          console.log(`${contador.toString().green} - ${description} - ${estado}`);
        }
      }
    });
  }


  toogleCompletadas( ids = [] ) {

    ids.forEach( id => {

      const tarea = this._listado[id];

      if ( !tarea.completedEn ) {
        tarea.completedEn = new Date().toISOString();
      }
    });

    this.listadoArray.forEach( tarea => {
      if ( !ids.includes(tarea.id) ) {
        this._listado[tarea.id].completedEn = null;
      }
    });
  }

}



module.exports = Tareas;

