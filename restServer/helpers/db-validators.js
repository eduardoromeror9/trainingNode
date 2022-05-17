const Role = require('../models/role');
const { Usuario, Categoria, Producto } = require('../models');


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


const existeCategoriaPorId = async( id ) => {

  const existeCategoria = await Categoria.findById(id);
  if ( !existeCategoria ) {
    throw new Error(`El id: ${id} no existe`);
  }

}


const existeProductoPorId = async( id ) => {

  const existeProducto = await Producto.findById(id);
  if ( !existeProducto ) {
    throw new Error(`El id: ${id} no existe`);
  }

}



module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioId,
  existeCategoriaPorId,
  existeProductoPorId
}