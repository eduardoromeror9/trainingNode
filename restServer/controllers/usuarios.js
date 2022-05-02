const { response } = require('express');
const bcryptjs = require('bcryptjs');



const Usuario = require('../models/usuario');


const usuariosGet = ( req = request, res = response ) => {


  const { q, nombre= 'No name', apikey, page=1, limit } = req.query;


  res.json({
    message: 'get API - Controller',
    q,
    nombre,
    apikey,
    page,
    limit
  });
}


const usuariosPut = async(req, res) => {

  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;


  if ( password ) {
    const salt = bcryptjs.genSaltSync(10);
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate( id, resto );


  res.json({
    message: 'put API - Controller',
    usuario
  });
}


const usuariosPost = async(req, res = response) => {

  const {nombre, correo, password, rol} = req.body;
  const usuario = new Usuario({nombre, correo, password, rol});


  // Encriptar password
  const salt = bcryptjs.genSaltSync(10);
  usuario.password = bcryptjs.hashSync(password, salt);


  // Guardar en BD
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