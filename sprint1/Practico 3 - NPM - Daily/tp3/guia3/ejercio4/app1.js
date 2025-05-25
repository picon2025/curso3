// Importamos el módulo 'express' que instalamos con npm
const express = require('express');

// Creamos una instancia de la aplicación de Express
const app = express();

// Definimos el puerto en el que va a correr el servidor
const PORT = 3000;

/* 
  Ruta GET para la raíz del sitio ("/")
  Esta ruta responde con el mensaje "Página de inicio"
  cuando el usuario visita http://localhost:3000/
*/
app.get('/', (req, res) => {
  res.send('Página de inicio'); // Enviamos una respuesta simple de texto
});

/* 
  Ruta GET para "/data"
  Esta ruta responde con el mensaje "Datos recibidos"
  cuando el usuario visita http://localhost:3000/data
*/
app.get('/data', (req, res) => {
  res.send('Datos recibidos'); // Otra respuesta simple
});

/*
  Iniciamos el servidor y lo ponemos a escuchar en el puerto 3000
  Cuando el servidor está listo, muestra un mensaje en la consola
*/
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
