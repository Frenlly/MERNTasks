import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import TaskReducer from "./taskReducer";
import { TaskContext } from "./taskContext";
import { ADD_TASK, SHOW_TASK, TASK_COMPLETE, DELETE_TASK } from "../../Types";

const tasks = [
  { id: 1, name: "Create Menu", projectId: 2, status: false },
  { id: 2, name: "Comprar pan", projectId: 3, status: true },
  { id: 3, name: "Crear DataProvider", projectId: 1, status: false },
  { id: 4, name: "Crear Header", projectId: 2, status: true },
  { id: 5, name: "Crear Lista Master Brker", projectId: 4, status: false },
  { id: 6, name: "Crear Edit Master Broker", projectId: 4, status: true },
  { id: 7, name: "Comprar Carnes", projectId: 3, status: false },
  { id: 8, name: "Crear Footer", projectId: 2, status: true },
  { id: 9, name: "Crear Secciones", projectId: 2, status: false },
  { id: 10, name: "Edit Master Broker", projectId: 4, status: true },
  { id: 11, name: "Comprar habichuelas", projectId: 3, status: false },
  { id: 12, name: "Agregar Blog", projectId: 2, status: true },
  { id: 13, name: "Borrar Master Broker", projectId: 4, status: true },
  { id: 15, name: "Comprar Confle", projectId: 3, status: false },
  { id: 16, name: "Show Master Broker", projectId: 4, status: true },
  { id: 17, name: "Crear Proyecto React Admin", projectId: 1, status: false },
  { id: 18, name: "Crear authProvider", projectId: 1, status: true },
  { id: 19, name: "Crear Listas", projectId: 1, status: false },
  { id: 20, name: "Comprar Vegetales", projectId: 3, status: false },
];

const TaskState = (props) => {
  const initialState = {
    tasks: [],
  };

  const [state, dispatch] = useReducer(TaskReducer, initialState);

  const showTask = () => {
    dispatch({
      type: SHOW_TASK,
      payload: tasks,
    });
  };

  const addTask = (task) => {
    task.id = uuidv4();

    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const chageStatus = (task) => {
    dispatch({
      type: TASK_COMPLETE,
      payload: task,
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: DELETE_TASK,
      payload: taskId,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        showTask,
        addTask,
        chageStatus,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
