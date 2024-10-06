function crearListado(vehiculos){
    let html = "<a href='/producto/nuevo' >Nueva Zapatilla</a>"
    html += "<ul>"
    for( let i = 0; i < vehiculos.length ; i++ ){
        html += "<li>"+ vehiculos[i].marca + ' ' + vehiculos[i].modelo + "<a href="+ "/productos/" + vehiculos[i].id +" >ver</a>"+ "<a href="+ "/producto/eliminar/" + vehiculos[i].id +" >Eliminar</a>" + "<a href="+ "/producto/modificar/" + vehiculos[i].id +" >Modificar</a>" + "</li>"
    }
    html += "</ul>"
    return html
} 

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
            <h1>Mi espectacular pagina web</h1>
            ${contenido}
        </body>
    </html>
    `
}

export { createPage, crearListado };