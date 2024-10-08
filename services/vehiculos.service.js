import { MongoClient, ObjectId } from "mongodb"
import dotenv from "dotenv";

dotenv.config();

const cliente = new MongoClient(process.env.MONGO_DB_URL)
const db = cliente.db("Reemo")

async function getVehiculos( filtros = {} ){
  // Excluir productos eliminados
  const filterMongo = { eliminado: { $ne: true } };

  // Filtro por rango de precio
  if( filtros.precioMayor !== undefined && filtros.precioMenor !== undefined ){
    filterMongo.$and = [
        { precio: { $gte: parseInt(filtros.precioMayor) } }, 
        { precio: { $lte: parseInt(filtros.precioMenor) } } 
      ]
  }else if( filtros.precioMayor !== undefined ){
      filterMongo.precio = { $gte: parseInt(filtros.precioMayor) }
  }else if( filtros.precioMenor !== undefined ){
      filterMongo.precio = { $lte: parseInt(filtros.precioMenor) }
  }

  // Filtro año
  if( filtros.año !== undefined ){
    filterMongo.año = parseInt(filtros.año);
  }

  // Filtro por marca
  if( filtros.marca !== undefined ){
      filterMongo.marca = filtros.marca;
  }

  console.log(filtros)
  await cliente.connect()
  return db.collection("vehiculos").find(filterMongo).toArray()
}

async function getVehiculosMarca( filtros = {} ){
  // Excluir productos eliminados
  const filterMongo = { eliminado: { $ne: true } };

  // Filtro por marca
  if( filtros.marca !== undefined ){
      filterMongo.marca = filtros.marca;
  }

  console.log(filtros)
  await cliente.connect()
  return db.collection("vehiculos").find(filterMongo).toArray()
}

async function getVehiculoId(id_ingresado){
  console.log(id_ingresado)
  await cliente.connect()
  return db.collection("vehiculos").findOne({ _id: new ObjectId(id_ingresado)})
}

async function agregarVehiculo(vehiculo){
  await cliente.connect()
  await db.collection("vehiculos").insertOne(vehiculo)
  return vehiculo
}

async function borrarVehiculoLogico(id){
  await cliente.connect()
  return db.collection("vehiculos").updateOne({ _id: new ObjectId(id) }, { $set: { eliminado: true } } )
}

async function editarVehiculo(id, vehiculoNuevo){
  await cliente.connect()
  return db.collection("vehiculos").replaceOne({ _id: new ObjectId(id) }, vehiculoNuevo)   
}

async function modificarVehiculo(id, vehiculoAct){
  await cliente.connect()
  return db.collection('vehiculos').replaceOne({
    _id: new ObjectId(id)},vehiculoAct
  )
}

async function actualizarVehiculo(id, vehiculoAct){
  await cliente.connect()
  return db.collection("vehiculos").updateOne({ _id: new ObjectId(id) }, { $set: vehiculoAct })
}

export { 
  getVehiculos, 
  getVehiculoId,
  agregarVehiculo,
  borrarVehiculoLogico,
  editarVehiculo,
  modificarVehiculo,
  actualizarVehiculo,
  getVehiculosMarca
}

export default { 
  getVehiculos, 
  getVehiculoId,
  agregarVehiculo,
  borrarVehiculoLogico,
  editarVehiculo,
  modificarVehiculo,
  actualizarVehiculo,
  getVehiculosMarca
}