import express from 'express';               // Importar Express
const app = express();                       // Crear instancia de Express
const PORT = 3000;                          // Definir puerto

// Ruta GET con parámetro de consulta "edad"
// Ejemplo: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
  const edad = req.query.edad;              // Obtener el parámetro "edad" de la consulta
  console.log(`Edad recibida: ${edad}`);   // Mostrar en consola la edad recibida
  res.send(`Edad del perfil: ${edad}`);    // Enviar respuesta al cliente con la edad
});

// Iniciar servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
