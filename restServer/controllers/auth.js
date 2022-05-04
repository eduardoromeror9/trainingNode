const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');


const login = async(req, res) => {

  const { correo, password } = req.body;

  try {

    // Verificar que el correo exista
    const usuario = await Usuario.findOne({ correo });

    if (!usuario) {
      return res.status(400).json({
        msg: 'El correo no existe'
      });
    }
    
    
    // Verificar que el usuario este activo
    if (!usuario.estado) {
      return res.status(400).json({
        msg: 'El usuario no esta activo'
      });
    }


    // Verificar que el password sea correcto
    const validPassword = bcryptjs.compare(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        msg: 'El password es incorrecto'
      });
    }


    // Generar el JWT
    const token = await generarJWT( usuario.id );

    res.json({
      usuario,
      token
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hubo un error, hable con el administrador',
    });    
  }

}



module.exports = {
  login
}