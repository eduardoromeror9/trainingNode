const { response } = require('express');
const bcryptjs = require('bcryptjs');



const Usuario = require('../models/usuario');


const usuariosGet = async( req = request, res = response ) => {


  // const { q, nombre= 'No name', apikey, page=1, limit } = req.query;
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true }

  // const usuarios = await Usuario.find(query)
  //   .skip(Number( desde ))
  //   .limit(Number( limite ));

  // const total = await Usuario.countDocuments(query);

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query)
    .skip(Number( desde ))
    .limit(Number( limite ))
  ]);


  res.json({
    // resp
    total,
    usuarios
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


  res.json(usuario);
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


const usuariosDelete = async(req, res) => {

  const { id } = req.params;
  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });

  res.json( usuario );
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