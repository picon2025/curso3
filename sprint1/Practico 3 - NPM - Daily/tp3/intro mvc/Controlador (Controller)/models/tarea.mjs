export default class Tarea {
  constructor(id, titulo, descripcion, completado = false) {
    this.id = id; // Identificador único
    this.titulo = titulo; // Título de la tarea
    this.descripcion = descripcion; // Descripción de la tarea
    this.completado = completado; // Estado de completado
  }

  // Marcar la tarea como completada
  completar() {
    this.completado = true;
  }

  // Validar que el título no esté vacío
  validar() {
    if (!this.titulo || this.titulo.trim() === '') {
      throw new Error('El título de la tarea es obligatorio.');
    }
  }
}
