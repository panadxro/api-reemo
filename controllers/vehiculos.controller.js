import * as services from "../services/vehiculos.service.js";
import * as views from "../views/index.js";

const getVehiculos = (req, res) => {
    services.getVehiculos()
        .then((vehiculos)=> res.send(views.createPage("Vehiculos", views.crearListado(vehiculos))) )
}

const getVehiculoId = (req, res) => {
  const id = req.params.id
  services.getVehiculoId(id)
      .then( (vehiculo) => {
          console.log(vehiculo)
          res.send(views.createPage("Vehículo",views.createPaginaDetalle(vehiculo)))
      } )
      .catch( error => console.log(error) )
}

const formVehiculo = (req, res) => {
  res.send(views.createPage("Agregar Vehículo", views.nuevoVehiculo()))
}

const agregarVehiculo = (req, res) => {
  console.log(req.body);

  const { marca, modelo, colores, link } = req.body;
  if (!marca || !modelo || !colores) {
    return res.status(400).send("Faltan datos necesarios para agregar vehículo");
  }

  services.agregarVehiculo(req.body)
    .then(() => res.redirect("/vehiculos"))
    .catch(err => res.status(500).send("Error al agregar el vehículo"));
};

const eliminarVehiculo = (req, res) => {
  const id = req.params.id
  services.borrarVehiculoLogico(id)
      .then( () => res.redirect("/vehiculos") )
}

const formEditarVehiculo = (req, res) => {
  const id = req.params.id
    services.getVehiculoId(id)
        .then( (vehiculo) => res.send(views.createPage( "Editar Vehículo", views.editarVehiculo(vehiculo) )) )
}

const editarVehiculo = (req, res) => {
  const id = req.params.id
  const vehiculos = req.body
  services.editarVehiculo(id, vehiculos)
      .then( () => res.redirect("/vehiculos") )
}

export { getVehiculos, getVehiculoId, formVehiculo, agregarVehiculo, eliminarVehiculo, formEditarVehiculo, editarVehiculo }