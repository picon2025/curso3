// Importamos el módulo Express
const express = require('express');

// Creamos una aplicación de Express
const app = express();

// Puerto en el que se ejecutará el servidor
const PORT = 3000;

/* 
  Ruta con un parámetro dinámico "id" en la URL
  Ejemplo: http://localhost:3000/user/123
  req.params.id accede al valor que se pasa como parte de la URL
*/
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; // Extraemos el parámetro 'id' desde la URL
  res.send(`Perfil del usuario con ID: ${userId}`); // Mostramos el ID recibido
});

/* 
  Ruta con múltiples parámetros dinámicos: "category" e "id"
  Ejemplo: http://localhost:3000/product/electronics/456
*/
app.get('/product/:category/:id', (req, res) => {
  const { category, id } = req.params; // Extraemos ambos parámetros desde la URL
  res.send(`Categoría: ${category}, ID del producto: ${id}`); // Mostramos ambos
});

/*
  Iniciamos el servidor en el puerto 3000
*/
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
