//import express from 'express' ;
// Crear una instancia de Express
//const app = express();
// Configurar el puerto en el que el servidor escuchará
//const PORT = 3000;
// Ruta básica
//app.get('/', (req, res) => (
//res.send('¡Hola, mundo!');
//});
// Iniciar el servidor
//app.listen(PORT, () => (
//console.log('Servidor corriendo en http://localhost:S(PORT)"); 









//--******* corregido

const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
