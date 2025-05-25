import express from 'express';    // Importar Express

const app = express();            // Crear instancia de Express
const PORT = 3000;                // Puerto donde correrá el servidor

// Ruta GET para el home
app.get('/', (req, res) => {
  res.send('Página de inicio');
});

// Ruta GET para recibir datos simples
app.get('/data', (req, res) => {
  res.send('Datos recibidos');
});

// Iniciar el servidor en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
