import express from "express"
import * as vehiculosController from "../controllers/vehiculos.controller.js";

const route = express.Router()

route.get("/vehiculos", vehiculosController.getVehiculos);
// route.get("/vehiculos/:id", vehiculosController.getVehiculoId);

export default route

/* Vehículos */
