const { response, request } = require('express');
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

  const body = req.body;
  const usuario = new Usuario(body);

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