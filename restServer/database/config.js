const mongoose = require("mongoose");

const dbConnection = async() => {

  try {
  
    await mongoose.connect( 'mongodb+srv://user_node_cafe:Ka%40Cyx!HXCDe6*x@clustercafe.s2eg0.mongodb.net/cafeDB' ,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    console.log("Base de datos online");
  
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};





module.exports = {
  dbConnection
};