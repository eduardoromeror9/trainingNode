const { Schema, model } = require('mongoose');


const UsuarioSchema = Schema({

  nombre: {
    type: String,
    required: [true, 'El nombre es necesario']
  },

  email: {
    type: String,
    required: [true, 'El correo es necesario'],
    unique: true,
  },

  password: {
    type: String,
    required: [true, 'La contraseña es necesaria'],
  },

  img: {
    type: String,
  },

  role: {
    type: String,
    required: [true, 'El rol es necesario'],
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },

  estado: {
    type: Boolean,
    default: true,
  },

  google: {
    type: Boolean,
    default: false
  }


})



module.exports = model('Usuarios', UsuarioSchema);