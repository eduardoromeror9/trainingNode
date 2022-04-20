const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');


const usuariosGet = (req = request, res = respose) => {

  const { q, nombre = 'No name', apiKey } = req.query;


  res.json({
    message: 'get API -  Controller',
    q,
    nombre,
    apiKey
  });
}

const usuariosPut = (req, res) => {

  const id = req.params.id;

  res.status(500).json({
    message: 'put API -  Controller',
    id
  });
}


const usuariosPost = async(req, res= response) => {


  const { nombre, email, password, role } = req.body;
  const usuario = new Usuario({ nombre, email, password, role });

  // Verificar si el correo existe
  const emailExiste = await Usuario.findOne({ email: email });
  if ( emailExiste ) {
    return res.status(400).json({
      message: 'El correo ya existe'
    });
  }


  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  usuario.password = bcryptjs.hashSync(password, salt);



  // Guardar el usuario en la base de datos
  await usuario.save();

  res.json({
    usuario
  })
}


const usuariosDelete = (req, res) => {
  res.json({
    message: 'delete API -  Controller'
  });
}


const usuariosPatch = (req, res) => {
  res.json({
    message: 'patch API -  Controller'
  });
}




module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch
}