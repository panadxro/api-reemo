// Contraseña Atlas: EXB12;W!XoBy

import express from 'express';
import views from './routes/views.routes.js';

const app = express();

app.use(views);

app.get('/', (req, res) => {
  const name = process.env.NAME || 'Lucas, Valentino y Yoel';
  res.send(`Hola ${name}!`);
});


app.listen(3333, () => console.log("Server on"))



/**
 * 1. La url no hace referencia a la locacion, sino identifica un recurso.
 * 
 * URL -> URI 
 * 
 * 2. La accion se define con los verbos HTTP
 * 
 * GET -> OBTENER UN RECURSO
 * POST -> CREAR UN RECURSO
 * PUT -> REEMPLAZAR UN RECURSO
 * PATCH -> ACTUALIZAR UN RECURSO
 * DELETE -> BORRAR UN RECURSO
 * 
 * 3. Los datos de los recursos son transportados utilizando el formato JSON o xml
 * 
 * 4. Los estados de las peticiones son definidas con http status code
 * 
 * 1xx -> Informativos
 * 2xx -> OK
 * 3xx -> redirecciones
 * 4xx -> Errores del usuario
 * 5xx -> Errores del servidor
 */



