const express = require('express');
const cors = require('cors');

const { dbConexion } = require('../database/config');


class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.usuariosPath = '/api/usuarios';
    this.authPath = '/api/auth';

    
    // Conexion a la base de datos
    this.conectarDb();


    // Middlewares
    this.middlewares();


    // Routes app
    this.routes();
  }


  async conectarDb() {
    await dbConexion();
  }


  middlewares() {

    // CORS
    this.app.use(cors());


    // Parse and read body
    this.app.use(express.json());


    // directory public
    this.app.use(express.static('public'));
  }


  routes() {

    this.app.use(this.authPath, require('../routes/auth'));
    this.app.use(this.usuariosPath, require('../routes/usuarios'));

  }

  listen(){

    this.app.listen(this.port, () => {
      console.log(`Server running on port: ${ this.port }`);
    });

  }


}



module.exports = Server;