import * as services from "../services/vehiculos.service.js";
import * as views from "../views/index.js";

const getVehiculos = (req, res) => {
    services.getVehiculos()
        .then((vehiculos)=> res.send(views.createPage("Vehiculos", views.crearListado(vehiculos))) )
}

const getVehiculoId = (req, res) => {
  const id = req.params.id
  services.getVehiculoId(id)
      .then( (producto) => {
          console.log(producto)
          res.send(views.createPage("Producto",views.createPaginaDetalle(producto)))
      } )
      .catch( error => console.log(error) )
}

const formVehiculo = (req, res) => {
  res.send(views.createPage("Agregar Producto", views.nuevoVehiculo()))
}

const agregarVehiculo = (req, res) => {
  services.agregarVehiculo(req.body)
      .then( () => res.redirect("/vehiculos") )
}

export { getVehiculos, getVehiculoId, formVehiculo, agregarVehiculo }