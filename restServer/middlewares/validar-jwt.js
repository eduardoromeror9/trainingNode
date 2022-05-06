const { response, request } = require('express');
const jwt = require('jsonwebtoken');


const Usuario = require('../models/usuario');



const validarJWT = async(req = request, res = response, next) => {

  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la peticion'
    });
  }

  try {

    const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // Leer usuario del uid
    const usuario = await Usuario.findById(uid);

    if (!usuario) {
      return res.status(404).json({
        msg: 'El usuario no existe en la BD'
      });
    }


    // Verificar si el uid tiene estado true
    if (!usuario.estado) {
      return res.status(401).json({
        msg: 'El usuario no esta activo'
      });
    }



    req.usuario = usuario;
    next();


  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no valido'
    });
  }



}


module.exports = {
  validarJWT
}