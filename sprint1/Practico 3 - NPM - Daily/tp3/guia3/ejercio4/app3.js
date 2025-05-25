// Importamos Express
const express = require('express');

// Inicializamos la aplicación
const app = express();

// Puerto donde escuchará el servidor
const PORT = 3000;

/*
  Ruta GET con un parámetro de consulta (?q=...)
  Ejemplo de solicitud: http://localhost:3000/search?q=javascript
  Se accede al parámetro con req.query.q
*/
app.get('/search', (req, res) => {
  const query = req.query.q; // Extraemos el valor de "q" de la consulta
  res.send(`Resultados de búsqueda para: ${query}`);
});

/*
  Ruta GET con múltiples parámetros de consulta
  Ejemplo: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
  Accedemos a cada uno mediante req.query.<nombre>
*/
app.get('/filter', (req, res) => {
  const { type, minPrice, maxPrice } = req.query; // Extraemos los parámetros
  res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
});

/*
  Iniciamos el servidor
*/
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
