const mongoose = require('mongoose');


const dbConexion = async() => {

  try {

    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conexion a la base de datos establecida');

  } catch (error) {
    console.log(error);
    throw new Error('Error al conectar con la base de datos');

  }

}


module.exports = {
  dbConexion
};