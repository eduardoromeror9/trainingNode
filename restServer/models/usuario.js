const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema({

  nombre: {
    type: String,
    required: [true, 'El nombre es necesario']
  },

  correo: {
    type: String,
    required: [true, 'El correo es necesario'],
    unique: true
  },

  password: {
    type: String,
    required: [true, 'La contraseña es necesaria']
  },

  img: {
    type: String,
  },

  rol: {
    type: String,
    required: true,
    emun: ['ADMIN_ROLE', 'USER_ROLE']
  },

  estado: {
    type: Boolean,
    default: true
  },

  google: {
    type: Boolean,
    default: false
  }

});



// Ocultar campos en la respuesta

UsuarioSchema.method('toJSON', function() {
  
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  // delete userObject.__v;
  
  return userObject;
  
})



module.exports = model('Usuario', UsuarioSchema);