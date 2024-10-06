import * as service from "../services/vehiculos.service.js";
import * as views from "../views/index.js";

const getVehiculos = (req, res) => {
    service.getVehiculos()
        .then((vehiculos)=> res.send(views.createPage("Vehiculos", views.crearListado(vehiculos))) )
}


export { getVehiculos }