const { response } = require('express');
const bcryptjs = require('bcryptjs');


const Usuario = require('../models/usuario');


const usuariosGet = (req, res = response) => {


  const {q, nombre= 'No name', apikey} = req.query;


  res.json({
    message: 'get API - Controller',
    q,
    nombre,
    apikey
  });
}


const usuariosPut = (req, res) => {

  const {id} = req.params;

  res.status(500).json({
    message: 'put API - Controller',
    id
  });
}


const usuariosPost = async(req, res = response) => {


  const {nombre, correo, password, rol} = req.body;
  const usuario = new Usuario({nombre, correo, password, rol});


  // Verificar si el correo existe
  const existeCorreo = await Usuario.findOne({correo: correo});
  if (existeCorreo) {
    return res.status(400).json({
      message: 'El correo ya existe'
    });
  }



  // Encriptar password
  const salt = bcryptjs.genSaltSync(10);
  usuario.password = bcryptjs.hashSync(password, salt);


  // Guardar en la base de datos
  await usuario.save();


  res.json({
    usuario
  });
}


const usuariosDelete = (req, res) => {
  res.json({
    message: 'delete API - Controller'
  });
}


const usuariosPatch = (req, res) => {
  res.json({
    message: 'patch API - Controller'
  });
}



module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch
}