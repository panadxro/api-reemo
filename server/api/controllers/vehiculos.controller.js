import * as service from "../../services/vehiculos.service.js"
import * as views from "../../views/index.js";

async function getVehiculos(req, res){
// Obtenemos los parámetros de paginación desde la URL (por defecto: page = 1, limit = 6)
  const { page = 1, limit = 8 } = req.query;

  try {
      // Convertimos los valores de page y limit a números
      const filtros = {
          page: parseInt(page),
          limit: parseInt(limit),
      };
      
      // Obtenemos los vehículos paginados
      const { autos, totalPages } = await service.getVehiculos(filtros);
      
      // Respondemos con los datos y el total de páginas
      res.status(200).json({ autos, totalPages });
  } catch (error) {
      console.error("Error al obtener vehículos:", error);
      res.status(500).json({ mensaje: "Error al obtener vehículos" });
  }
  /* 
    const filtros = req.query
    service.getVehiculos(filtros)
    .then( (vehiculos) => res.status(200).json(vehiculos) ) */
}

function getVehiculosId(req, res){
    const id = req.params.id
    service.getVehiculoId(id)
        .then( (vehiculos) => res.status(200).json(vehiculos) )
}

function crearVehiculo(req, res){
    const vehiculo = req.body
    service.agregarVehiculo(vehiculo)
        .then( (vehiculo) => res.status(201).json(vehiculo) )
}

function borrarVehiculo(req, res){
    const id = req.params.id
    service.borrarVehiculoLogico(id)
        .then( () => res.status(204).json(id) )
        .catch( () => res.status(404).json({mensaje: "Recurso no encontrado"}) )
}

function reemplazarVehiculo(req, res){
    const id = req.params.id
    const vehiculo = req.body
    service.modificarVehiculo(id, vehiculo)
        .then( (vehiculo) => res.status(204).json(vehiculo) )
        .catch( () => res.status(404).json({mensaje: "Recurso no encontrado"}) )
}

function actualizarVehiculo(req, res){
    const id = req.params.id
    const vehiculo = req.body
    console.log('ID recibido:', id);
    console.log('Vehiculo recibido:', vehiculo);

    service.actualizarVehiculo(id, vehiculo)
    .then( (vehiculo) => res.status(204).json(vehiculo) )
    .catch( () => res.status(404).json({mensaje: "Recurso no encontrado"}) )
}

export {
    getVehiculos,
    getVehiculosId,
    crearVehiculo,
    borrarVehiculo,
    reemplazarVehiculo,
    actualizarVehiculo
}