import express from "express"
import * as controllers from "../controllers/usuarios.controller.js"

const route = express.Router()

route.get("/usuarios", controllers.getUsuarios)
route.post("/usuario/:idUsuario/historial", controllers.agregarAlHistorial)
route.post("/usuarios", controllers.agregarUsuario)
route.delete("/usuarios/:id", controllers.borrarUsuario)

export default route