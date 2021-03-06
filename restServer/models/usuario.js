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
  
  const {__v, password, _id,...usuario} = this.toObject();
  usuario.uid = _id;
  
  return usuario;
  
})



module.exports = model('Usuario', UsuarioSchema);