const express = require('express');
const cors = require('cors');



class Server{

  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';

    // Middlewares
    this.middlewares();


    // Rutas de mi app
    this.routes();
  }


  middlewares(){

    // Cors
    this.app.use(cors());

    
    // lectura y Parseo del body
    this.app.use(express.json());



    // Directorio publico
    this.app.use(express.static('public'));

  }


  routes(){

    // Rutas de mi app
    this.app.use(this.usuariosPath, require('../routes/usuarios'));
  }


  listen(){
    this.app.listen( this.port, () => {
      console.log(`Server listening on port ${this.port}`);
    });
  }

}




module.exports = Server;
