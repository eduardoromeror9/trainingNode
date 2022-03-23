const { v4: uuidv4 } = require('uuid');

class Tarea {

  id = '';
  description = '';
  completedEn = null;

  constructor(description) {

    this.id = uuidv4();
    this.description = description;
    this.completedEn = null;
  
  }

}





module.exports = Tarea;
