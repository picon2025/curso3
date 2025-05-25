// Importar el módulo Express (usando sintaxis ES Modules)
import express from 'express';

// Crear una instancia de Express para configurar el servidor
const app = express();

// Definir el puerto en el que el servidor escuchará las solicitudes
const PORT = 3000;

// Definir una ruta básica para la raíz '/' que responde a solicitudes GET
app.get('/', (req, res) => {
  // Enviar una respuesta con el texto '¡Hola, mundo!' al navegador
  res.send('¡Hola, mundo!');
});

// Iniciar el servidor para que escuche en el puerto definido
app.listen(PORT, () => {
  // Mostrar un mensaje en consola indicando que el servidor está corriendo
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
