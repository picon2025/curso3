import Tarea from '../models/tarea.mjs';

let tareas = []; // Almacenamiento en memoria (simulado)

// Listar todas las tareas
export function listarTareas() {
  return tareas;
}

// Listar solo las tareas completadas
export function listarTareasCompletadas() {
  return tareas.filter(t => t.completado);
}

// Crear una nueva tarea
export function crearTarea(id, titulo, descripcion, completado = false) {
  const tarea = new Tarea(id, titulo, descripcion, completado);
  tarea.validar();
  tareas.push(tarea);
}

// Completar una tarea por id
export function completarTarea(id) {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) {
    tarea.completar();
  } else {
    throw new Error('Tarea no encontrada');
  }
}

// Eliminar una tarea por id
export function eliminarTarea(id) {
  tareas = tareas.filter(t => t.id !== id);
}
