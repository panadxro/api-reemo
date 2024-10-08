import * as services from "../services/usuarios.service.js";
import * as views from "../views/index.js";

const getUsuarios = (req, res) => {
  services.getUsuarios()
      .then((usuarios)=> res.send(views.createPage("Vehículos", views.crearListadoUsuarios(usuarios))) )
      .catch(err => res.status(500).send(`<p>Error al obtener los usuarios</p> <a href="/vehiculos">Volver al inicio</a> `));
}

const getUsuarioId = (req, res) => {
  const id = req.params.id
  services.getUsuarioId(id)
    .then( (usuario) => {
      res.send(views.createPage("Usuario",views.createUsuarioDetalle(usuario)))
  } )
.catch( error => console.log(error) )
}

export {
  getUsuarios,
  getUsuarioId
}