// Renderizar una lista de tareas en formato JSON
export function renderizarListaTareas(tareas) {
  return JSON.stringify(tareas, null, 2);
}

// Renderizar un mensaje en formato JSON
export function renderizarMensaje(mensaje) {
  return JSON.stringify({ mensaje }, null, 2);
}

// Renderizar una tarea individual en formato JSON
export function renderizarTarea(tarea) {
  return JSON.stringify(tarea, null, 2);
}
