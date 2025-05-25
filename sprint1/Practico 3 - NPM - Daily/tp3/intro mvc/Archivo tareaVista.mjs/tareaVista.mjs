// tareaVista.mjs
// Funciones para renderizar tareas y mensajes en formato JSON

// Función para renderizar una lista de tareas en formato JSON con indentación
export function renderizarListaTareas(tareas) {
  return JSON.stringify(tareas, null, 2);
}

// Función para renderizar un mensaje genérico en formato JSON con indentación
export function renderizarMensaje(mensaje) {
  return JSON.stringify({ mensaje }, null, 2);
}

// Función para renderizar una tarea específica en formato JSON con indentación
export function renderizarTarea(tarea) {
  return JSON.stringify(tarea, null, 2);
}
