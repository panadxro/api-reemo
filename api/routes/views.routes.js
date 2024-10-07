import express from "express"
import * as controllers from "../controllers/vehiculos.controller.js"

const route = express.Router()

route.get("/vehiculos", controllers.getVehiculos)
route.get("/vehiculos/:id", controllers.getVehiculosId)
route.post("/vehiculos", controllers.crearVehiculo)
route.delete("/vehiculo/:id", controllers.borrarVehiculo)
route.put("/vehiculo/:id", controllers.reemplazarVehiculo)  //reemplaza
route.patch("/vehiculo/:id", controllers.actualizarVehiculo) //actualiza

export default route