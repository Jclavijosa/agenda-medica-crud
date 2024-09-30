import React from 'react';
import Task from './Task.js';  // Importa el componente Task para renderizar cada tarea

// Componente que renderiza la lista de tareas.
function TaskList({ tasks, deleteTask, toggleTaskCompletion, editTask }) {
  return (
    <ul>
      {/* Itera sobre la lista de tareas y pasa cada una al componente Task */}
      {tasks.map((task, index) => (
        <Task
          key={index}  // Clave única para identificar cada tarea
          task={task}  // Pasa la tarea actual como propiedad
          index={index}  // Pasa el índice de la tarea actual
          deleteTask={deleteTask}  // Función para eliminar la tarea
          toggleTaskCompletion={toggleTaskCompletion}  // Función para marcar la tarea como completada
          editTask={editTask}  // Función para editar la tarea
        />
      ))}
    </ul>
  );
}

export default TaskList;
