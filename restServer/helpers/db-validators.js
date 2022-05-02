const Role = require('../models/role');
const Usuario = require('../models/usuario');


const esRoleValido = async(rol = '') => {
  const existeRol = await Role.findOne({rol});
  if (!existeRol) {
    throw new Error(`El rol ${rol} no es valido`);
  }
}

const emailExiste = async(correo = '') => {
  const existeCorreo = await Usuario.findOne({correo});
  if (existeCorreo) {
    throw new Error(`El correo: ${correo}, ya existe`);
  }
}


const existeUsuarioId = async( id ) => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El id: ${id} no existe`);
  }
}



module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioId
}