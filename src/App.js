import React, { useState } from 'react';
import TaskList from './components/TaskList';  // Importa la lista de tareas
import TaskForm from './components/TaskForm';  // Importa el formulario para agregar tareas
import './App.css';  // Importa el archivo de estilos CSS
import agendaImage from './assets/agendaImage.png';  // Importa la imagen de la agenda médica

function App() {
  // Estado que almacena todas las tareas (citas) de la aplicación.
  const [tasks, setTasks] = useState([]);  

  // Función para agregar una nueva tarea/cita.
  // Se llama desde el formulario y actualiza la lista de tareas.
  const addTask = (task) => {
    setTasks([...tasks, task]);  // Añade la nueva tarea/cita a la lista actual
  };

  // Función para eliminar una tarea/cita.
  // Filtra la lista de tareas y elimina la seleccionada.
  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);  // Filtra por índice
    setTasks(newTasks);  // Actualiza el estado con la nueva lista de tareas
  };

  // Función para marcar una tarea como completada o desmarcarla.
  const toggleTaskCompletion = (taskIndex) => {
    const newTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, completed: !task.completed };  // Cambia el estado "completed"
      }
      return task;
    });
    setTasks(newTasks);  // Actualiza el estado con las tareas modificadas
  };

  // Función para editar una tarea o cita (incluye cambios en texto y fecha/hora).
  const editTask = (taskIndex, newTask) => {
    const newTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return newTask;  // Reemplaza la tarea en el índice correspondiente
      }
      return task;
    });
    setTasks(newTasks);  // Actualiza el estado con las tareas modificadas
  };

  // Renderizado del componente principal que contiene el formulario y la lista de tareas.
  return (
    <div className="App">
      <header>
        <img src={agendaImage} alt="Agenda Médica" className="header-image" />  {/* Muestra la imagen de la agenda médica */}
        <h1>Agenda Médica</h1>  {/* Título de la aplicación */}
      </header>
      <TaskForm addTask={addTask} />  {/* Formulario para agregar una nueva tarea */}
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        toggleTaskCompletion={toggleTaskCompletion} 
        editTask={editTask} 
      />  {/* Lista de tareas con las acciones correspondientes */}
    </div>
  );
}

export default App;
