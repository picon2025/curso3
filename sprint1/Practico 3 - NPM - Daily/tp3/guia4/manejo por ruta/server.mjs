import express from 'express';      // Importar Express
const app = express();              // Crear instancia de Express
const PORT = 3000;                  // Definir puerto

// Ruta GET con parámetro dinámico "id"
// Ejemplo de solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;          // Capturar el parámetro "id"
  console.log(`ID del usuario recibido: ${userId}`);  // Mostrar en consola
  res.send(`Perfil del usuario con ID: ${userId}`);  // Responder al cliente
});

// Iniciar servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
