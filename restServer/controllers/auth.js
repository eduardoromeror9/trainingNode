const { response } = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/generar-jwt');
const { googleVerify } = require('../helpers/google-verify');


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


const googleSignIn = async(req, res = response) => {

  const { id_token } = req.body;

  try {

    const { nombre, img, correo } = await googleVerify(id_token);

    
    res.json({
      msg: 'Google sign in',
      id_token
    })

  } catch (error) {
    json.status(400).json({
      ok: false,
      msg: 'El token no se pudo verificar',
    });
  }


}



module.exports = {
  login,
  googleSignIn
}