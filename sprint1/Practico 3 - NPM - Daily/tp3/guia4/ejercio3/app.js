import express from 'express';  // Importar Express

const app = express();          // Crear instancia de Express
const PORT = 3000;              // Puerto del servidor

// Ruta GET con parámetro dinámico "id"
// Ejemplo: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;              // Obtener parámetro de ruta
  res.send(`Perfil del usuario con ID: ${userId}`); // Responder con el parámetro
});

// Ruta GET con múltiples parámetros: categoría e id
// Ejemplo: http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req, res) => {
  const { category, id } = req.params;       // Obtener parámetros de ruta
  res.send(`Categoría: ${category}, ID del producto: ${id}`);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
