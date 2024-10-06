import express from "express"
import * as controllers from "../controllers/vehiculos.controller.js";

const route = express.Router()

route.get("/vehiculos", controllers.getVehiculos)
route.get("/vehiculos/:id", controllers.getVehiculoId)
route.get("/vehiculo/nuevo", controllers.formVehiculo)
route.post("/vehiculo/nuevo", controllers.agregarVehiculo)

export default route