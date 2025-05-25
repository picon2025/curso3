import express from 'express';
import bodyParser from 'body-parser';
import {
  listarTareasController,
  listarTareasCompletadasController,
  crearTareaController,
  completarTareaController,
  eliminarTareaController
} from './controllers/tareaController.mjs';

const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rutas
app.get('/tareas', listarTareasController);
app.get('/tareas/completadas', listarTareasCompletadasController);
app.post('/tareas', crearTareaController);
app.put('/tareas/:id/completar', completarTareaController);
app.delete('/tareas/:id', eliminarTareaController);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
