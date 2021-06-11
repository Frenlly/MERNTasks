import React, { useContext } from "react";
import { TaskContext } from "../../../Context/Tasks/taskContext";

const Task = ({ task, projectId }) => {
  const context = useContext(TaskContext);
  const { chageStatus, deleteTask } = context;
  if (task.projectId !== projectId) return null;

  const status = (task) => {
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }

    chageStatus(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status ? (
          <button
            type="button"
            className="completo"
            onClick={() => status(task)}
          >
            Completado
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => status(task)}
          >
            Incompleta
          </button>
        )}
      </div>

      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Task;
