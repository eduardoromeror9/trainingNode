const { response } = require('express');


const esAdminRole = (req, res = response, next) => {

  if (!req.usuario) {
    return res.status(500).json({
      msg: 'Se quiere verificar el rol de un usuario sin validar el token'
    });
  }

  
  const { rol, nombre } = req.usuario;

  if (rol !== 'ADMIN_ROLE') { 
    return res.status(401).json({
      msg: `El usuario ${nombre} no tiene el rol de ADMINISTRADOR`
    });
  }

  next();
}


const tieneRole = ( ...roles ) => {
  
  return (req, res = response, next) => {

    if (!req.usuario) {
      return res.status(500).json({
        msg: 'Se quiere verificar el rol de un usuario sin validar el token'
      });
    }

    if (!roles.includes (req.usuario.rol)) {
      return res.status(401).json({
        msg: `El usuario ${req.usuario.nombre} no tiene el rol de ${roles}`
    });

  }
    next();

  }
}



module.exports = {
  esAdminRole,
  tieneRole
}