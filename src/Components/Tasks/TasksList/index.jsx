import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../../../Context/Projects/projectContext";
import { TaskContext } from "../../../Context/Tasks/taskContext";

import Task from "./Task";

const TasksList = () => {
  const taskProject = useContext(ProjectContext);
  const { project, deleteProject } = taskProject;

  const contextTask = useContext(TaskContext);
  const { showTask, tasks } = contextTask;

  useEffect(() => {
    showTask();
  }, []);

  if (!project) return <h2>Seleccione un proyecto</h2>;

  return (
    <>
      <h2>Proyecto: {project[0].name}</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <li className="tarea">
            <p>No hay Tareas</p>
          </li>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} task={task} projectId={project[0].id} />
          ))
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => {
          deleteProject(project[0].id);
        }}
      >
        Elimnar Proyecto &times;
      </button>
    </>
  );
};

export default TasksList;
