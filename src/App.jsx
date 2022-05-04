import React, { useState } from "react";

import "./App.css";

import AddTask from "./components/AddTask";
import Header from "./components/header";
import Tasks from "./components/Tasks";

const App = () => {
  // let  menssagem = "hello world"; variavel normal

  //array dos dados do formulario (stage)
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },
  ]); 

  /// funções auxiliares de manipulação dos itens.
  const handleTaskAddition = (taskTitle) => {
    ///cria as linha a partir do click do botão.
    const newTask = [
      ... tasks, 
      {
        id: Math.random(10),
        title: taskTitle,
        completed: false,
      },
    ];
    setTasks(newTask);
    
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {... task, completed: !task.completed}

      return task;
    });

    setTasks(newTasks);

  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId);

    setTasks(newTasks);
  };

/// componente exportado
  return (
    <>
      <div className="container"> 
        <Header/>
        <AddTask handleTaskAddition={handleTaskAddition}  />
        <Tasks
          tasks = {tasks}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      </div>
    </>
  )
}

export default App;
