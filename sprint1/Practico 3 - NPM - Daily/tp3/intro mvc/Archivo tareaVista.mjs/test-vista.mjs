import { renderizarListaTareas, renderizarMensaje, renderizarTarea } from './tareaVista.mjs';

// Ejemplo de lista de tareas
const tareas = [
  { id: 1, titulo: 'Comprar leche', descripcion: 'Ir al supermercado', completado: false },
  { id: 2, titulo: 'Hacer ejercicio', descripcion: '30 minutos de caminata', completado: true }
];

// Probar renderizado de lista de tareas
console.log('Lista de tareas:');
console.log(renderizarListaTareas(tareas));

// Probar renderizado de mensaje
console.log('Mensaje:');
console.log(renderizarMensaje('Tarea creada correctamente'));

// Probar renderizado de tarea específica
console.log('Tarea individual:');
console.log(renderizarTarea(tareas[0]));
