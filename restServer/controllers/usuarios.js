const { response } = require('express');


const usuariosGet = (req, res = response) => {
  res.json({
    message: 'get API - Controller'
  });
}


const usuariosPut = (req, res) => {
  res.status(500).json({
    message: 'put API - Controller'
  });
}


const usuariosPost = (req, res) => {
  res.status(201).json({
    message: 'post API - Controller'
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