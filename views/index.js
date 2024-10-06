function createPage(titulo, contenido){ 
    return `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${titulo}</title>
        </head>
        <body>
            <h1>Vehículos</h1>
            ${contenido}
        </body>
    </html>
    `
  }
  
  function crearListado(vehiculos){
    let html = "<a href='/vehiculo/nuevo' >Nuevo Vehículo</a>"
    html += "<ul>"
    for( let i = 0; i < vehiculos.length ; i++ ){
        html += "<li>"+ vehiculos[i].marca + ' ' + vehiculos[i].modelo + "<a href="+ "/vehiculos/" + vehiculos[i]._id +" >Ver</a>"+ "<a href="+ "/vehiculo/eliminar/" + vehiculos[i]._id +" >Eliminar</a>" + "<a href="+ "/vehiculo/modificar/" + vehiculos[i]._id +" >Modificar</a>" + "</li>"
    }
    html += "</ul>"
    return html
  } 
  
  function createPaginaDetalle(producto){
  console.log(producto)
  return `
      <p>ID: ${producto._id}</p>
      <p>MARCA: ${producto.marca}</p>
      <p>MODELO: ${producto.modelo}</p>
      <p>WEB: <a href="${producto.link}" target="_blank">${producto.link}</a></p>
      <p>IMAGEN: ${producto.img}</p>
      <p>AÑO: ${producto.año}</p>
      <p>PRECIO: ${producto.precio}</p>
      <p>DESCRIPCION: ${producto.descripcion}</p>
  
      <a href="/vehiculos" >atras</a>
  `
  }
  
  function nuevoVehiculo(){
    return `
    <h1>Agregar Vehículo</h1>
    <form action="/vehiculo/nuevo" method="POST">
  
        <label for="marca">Marca</label>
        <input type="text" name="marca" placeholder="Marca">
  
        <label for="modelo">Modelo</label>
        <input type="text" name="modelo" placeholder="Modelo">
  
        <label for="colores">Colores</label>
        <select name="colores" placeholder="Link Web">
        <option>Blanco</option>
        <option>Negro</option>
        <option>Gris</option>
        <option>Rojo</option>
        <option>Azul</option>
        <option>Verde</option>
        </select>
  
        <label for="Link">Web</label>
        <input type="text" name="Link" placeholder="Link">
  
        <button type="submit" >Agregar</button>
    </form>
    `
  }
  
  export default { createPage, crearListado, createPaginaDetalle, nuevoVehiculo };
  export { createPage, crearListado, createPaginaDetalle, nuevoVehiculo };