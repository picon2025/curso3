// Importar la clase Tarea desde tarea.mjs
import Tarea from './tarea.mjs';

try {
  // Crear una nueva tarea
  const tarea1 = new Tarea(1, 'Estudiar Node.js', 'Repasar conceptos básicos');
  
  // Validar la tarea (debe pasar sin errores)
  tarea1.validar();
  
  // Mostrar la tarea antes de marcarla como completada
  console.log('Tarea antes de completar:', tarea1);

  // Marcar la tarea como completada
  tarea1.completar();

  // Mostrar la tarea después de completarla
  console.log('Tarea después de completar:', tarea1);
  
} catch (error) {
  // Capturar y mostrar cualquier error, como título vacío
  console.error('Error:', error.message);
}
